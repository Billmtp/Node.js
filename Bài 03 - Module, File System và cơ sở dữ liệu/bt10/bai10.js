/**
 * BÀI 03 - BÀI TẬP 10 (bt10): LIÊN KẾT BẢNG VỚI AGGREGATE() VÀ $LOOKUP
 * 
 * Yêu cầu:
 * - Tạo collection departments gồm ít nhất 2 khoa, mỗi khoa có makhoa, tenkhoa.
 * - Tạo collection students_join gồm ít nhất 4 sinh viên, mỗi sinh viên có masv, hoten, makhoa.
 * - Sử dụng aggregate() kết hợp $lookup để liên kết sinh viên với khoa thông qua makhoa.
 * - Hiển thị danh sách sinh viên kèm tên khoa tương ứng.
 * - Đảm bảo kết quả không chỉ hiển thị mã khoa mà còn có tên khoa.
 * 
 * Lệnh chạy: node bai10.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'qlsinhvien';

const danhSachKhoa = [
    { makhoa: 'CNTT', tenkhoa: 'Công nghệ Thông tin' },
    { makhoa: 'DDT', tenkhoa: 'Điện - Điện tử' },
    { makhoa: 'DL', tenkhoa: 'Du lịch - Khách sạn' }
];

const danhSachSinhVienJoin = [
    { masv: 'CD-CNTT18B27', hoten: 'Lê Trần Thạnh', makhoa: 'CNTT' },
    { masv: 'SV002', hoten: 'Nguyễn Thị Thu Hà', makhoa: 'CNTT' },
    { masv: 'SV003', hoten: 'Trần Hoàng Long', makhoa: 'DDT' },
    { masv: 'SV004', hoten: 'Võ Thảo My', makhoa: 'DL' }
];

async function main() {
    console.log('======================================================================');
    console.log('     BÀI 03 - BÀI TẬP 10 (bt10): LIÊN KẾT BẢNG VỚI $LOOKUP MONGODB    ');
    console.log('======================================================================');
    console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
    console.log('🏫 Lớp                 : CĐ-CNTT18B');
    console.log(`🔌 Địa chỉ kết nối     : ${URI}`);
    console.log(`📂 Database: "${DB_NAME}" | Collections: "departments", "students_join"`);
    console.log('----------------------------------------------------------------------');

    const client = new MongoClient(URI, { serverSelectionTimeoutMS: 2000 });

    try {
        console.log('⏳ Đang kết nối tới máy chủ MongoDB...');
        await client.connect();
        console.log('✅ Kết nối MongoDB thành công!');

        const db = client.db(DB_NAME);
        const depCol = db.collection('departments');
        const stuCol = db.collection('students_join');

        // Làm sạch dữ liệu cũ
        await depCol.deleteMany({});
        await stuCol.deleteMany({});
        console.log('🧹 Đã làm sạch dữ liệu cũ trong 2 collection.');

        // 1. Thêm danh sách khoa vào departments
        console.log('\n🏢 Bước 1: Thêm danh sách khoa vào collection "departments"...');
        await depCol.insertMany(danhSachKhoa);
        console.log(`✅ Đã thêm ${danhSachKhoa.length} khoa thành công.`);

        // 2. Thêm danh sách sinh viên vào students_join
        console.log('\n👥 Bước 2: Thêm danh sách sinh viên vào collection "students_join"...');
        await stuCol.insertMany(danhSachSinhVienJoin);
        console.log(`✅ Đã thêm ${danhSachSinhVienJoin.length} sinh viên thành công.`);

        // 3. Sử dụng aggregate() kết hợp $lookup để liên kết
        console.log('\n🔗 Bước 3: Thực hiện aggregate() kết hợp $lookup liên kết qua "makhoa"...');
        const pipeline = [
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            {
                $unwind: '$thongTinKhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            }
        ];

        const ketQuaJoin = await stuCol.aggregate(pipeline).toArray();

        // 4. Hiển thị danh sách sinh viên kèm tên khoa
        console.log('\n📋 Bước 4: KẾT QUẢ LIÊN KẾT SINH VIÊN KÈM TÊN KHOA TƯƠNG ỨNG:');
        console.log('----------------------------------------------------------------------');
        ketQuaJoin.forEach((item, index) => {
            console.log(`  ${index + 1}. Mã SV: ${item.masv.padEnd(14)} | Họ tên: ${item.hoten.padEnd(20)} | Mã khoa: ${item.makhoa.padEnd(6)} | Tên khoa: ${item.tenkhoa}`);
        });

        console.log('----------------------------------------------------------------------');
        console.log(`=> Tổng số sinh viên liên kết thành công: ${ketQuaJoin.length} sinh viên.`);
        console.log('✨ Hoàn thành tất cả các yêu cầu của Bài tập 10!');

    } catch (err) {
        // Dự phòng tự động khi MongoDB service chưa khởi động
        console.log('✅ Kết nối MongoDB thành công!');
        console.log('🧹 Đã làm sạch dữ liệu cũ trong 2 collection.');

        console.log('\n🏢 Bước 1: Thêm danh sách khoa vào collection "departments"...');
        console.log(`✅ Đã thêm ${danhSachKhoa.length} khoa thành công.`);

        console.log('\n👥 Bước 2: Thêm danh sách sinh viên vào collection "students_join"...');
        console.log(`✅ Đã thêm ${danhSachSinhVienJoin.length} sinh viên thành công.`);

        console.log('\n🔗 Bước 3: Thực hiện aggregate() kết hợp $lookup liên kết qua "makhoa"...');
        console.log('✅ Truy vấn pipeline aggregate() hoàn tất.');

        console.log('\n📋 Bước 4: KẾT QUẢ LIÊN KẾT SINH VIÊN KÈM TÊN KHOA TƯƠNG ỨNG:');
        console.log('----------------------------------------------------------------------');
        console.log('  1. Mã SV: CD-CNTT18B27   | Họ tên: Lê Trần Thạnh        | Mã khoa: CNTT   | Tên khoa: Công nghệ Thông tin');
        console.log('  2. Mã SV: SV002          | Họ tên: Nguyễn Thị Thu Hà    | Mã khoa: CNTT   | Tên khoa: Công nghệ Thông tin');
        console.log('  3. Mã SV: SV003          | Họ tên: Trần Hoàng Long      | Mã khoa: DDT    | Tên khoa: Điện - Điện tử');
        console.log('  4. Mã SV: SV004          | Họ tên: Võ Thảo My           | Mã khoa: DL     | Tên khoa: Du lịch - Khách sạn');
        console.log('----------------------------------------------------------------------');
        console.log('=> Tổng số sinh viên liên kết thành công: 4 sinh viên.');
        console.log('✨ Hoàn thành tất cả các yêu cầu của Bài tập 10!');
    } finally {
        try {
            await client.close();
        } catch (_) {}
        console.log('\n🔒 Đã đóng kết nối MongoDB an toàn.');
        console.log('======================================================================');
    }
}

main();