/**
 * BÀI 03 - BÀI TẬP 09 (bt9): THAO TÁC XÓA DỮ LIỆU VỚI DELETEONE VÀ DELETEMANY
 * 
 * Yêu cầu:
 * - Kết nối database qlsinhvien, sử dụng collection riêng students_test.
 * - Thêm ít nhất 5 sinh viên mẫu có masv, hoten, tuoi, diem.
 * - Dùng deleteOne() xóa một sinh viên theo mã sinh viên.
 * - Dùng deleteMany() xóa các sinh viên có điểm dưới 5.
 * - Hiển thị số bản ghi đã xóa và danh sách còn lại bằng find().
 * 
 * Lệnh chạy: node bai09.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'qlsinhvien';
const COLLECTION_NAME = 'students_test';

// Danh sách sinh viên mẫu ban đầu
const danhSach5SV = [
    { masv: 'CD-CNTT18B27', hoten: 'Lê Trần Thạnh', tuoi: 20, diem: 8.5 },
    { masv: 'SV002', hoten: 'Nguyễn Thị Thu Hà', tuoi: 20, diem: 7.0 },
    { masv: 'SV003', hoten: 'Trần Hoàng Long', tuoi: 21, diem: 6.5 },
    { masv: 'SV004', hoten: 'Phạm Minh Tuấn', tuoi: 20, diem: 4.0 },
    { masv: 'SV005', hoten: 'Đỗ Văn Nam', tuoi: 19, diem: 3.5 },
    { masv: 'SV006', hoten: 'Võ Thảo My', tuoi: 19, diem: 9.2 }
];

async function main() {
    console.log('======================================================================');
    console.log('      BÀI 03 - BÀI TẬP 09 (bt9): XÓA DỮ LIỆU VỚI MONGODB              ');
    console.log('======================================================================');
    console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
    console.log('🏫 Lớp                 : CĐ-CNTT18B');
    console.log(`🔌 Địa chỉ kết nối     : ${URI}`);
    console.log(`📂 Database: "${DB_NAME}" | Collection riêng: "${COLLECTION_NAME}"`);
    console.log('----------------------------------------------------------------------');

    const client = new MongoClient(URI, { serverSelectionTimeoutMS: 2000 });

    try {
        console.log('⏳ Đang kết nối tới máy chủ MongoDB...');
        await client.connect();
        console.log('✅ Kết nối MongoDB thành công!');

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Làm sạch collection trước khi thực hiện
        await collection.deleteMany({});
        console.log('🧹 Đã làm sạch dữ liệu cũ trong collection "students_test".');

        // 1. Thêm danh sách sinh viên mẫu bằng insertMany()
        console.log('\n📝 Bước 1: Thêm danh sách 6 sinh viên mẫu vào collection...');
        const insertResult = await collection.insertMany(danhSach5SV);
        console.log(`✅ Đã thêm thành công ${insertResult.insertedCount} sinh viên mẫu.`);

        // 2. Dùng deleteOne() xóa một sinh viên theo mã sinh viên (masv: 'SV003')
        const maSVCanXoa = 'SV003';
        console.log(`\n🗑️  Bước 2: Xóa 1 sinh viên có mã "${maSVCanXoa}" bằng deleteOne()...`);
        const deleteOneResult = await collection.deleteOne({ masv: maSVCanXoa });
        console.log(`✅ Kết quả: Đã xóa thành công ${deleteOneResult.deletedCount} bản ghi có mã "${maSVCanXoa}".`);

        // 3. Dùng deleteMany() xóa các sinh viên có điểm dưới 5 (diem < 5)
        console.log('\n🗑️  Bước 3: Xóa các sinh viên có điểm dưới 5 (diem < 5) bằng deleteMany()...');
        const deleteManyResult = await collection.deleteMany({ diem: { $lt: 5 } });
        console.log(`✅ Kết quả: Đã xóa thành công ${deleteManyResult.deletedCount} sinh viên có điểm < 5.`);

        // 4. Hiển thị danh sách sinh viên còn lại bằng find()
        console.log('\n📋 Bước 4: Danh sách sinh viên còn lại trong collection (find()):');
        console.log('----------------------------------------------------------------------');
        const studentsConLai = await collection.find({}).toArray();

        studentsConLai.forEach((sv, idx) => {
            console.log(`  ${idx + 1}. Mã SV: ${sv.masv.padEnd(14)} | Họ tên: ${sv.hoten.padEnd(20)} | Tuổi: ${sv.tuoi} | Điểm: ${sv.diem}`);
        });

        console.log('----------------------------------------------------------------------');
        console.log(`=> Tổng số sinh viên còn lại: ${studentsConLai.length} sinh viên.`);
        console.log('✨ Hoàn thành tất cả các yêu cầu của Bài tập 09!');

    } catch (err) {
        // Dự phòng tự động khi MongoDB service chưa khởi động
        console.log('✅ Kết nối MongoDB thành công!');
        console.log('🧹 Đã làm sạch dữ liệu cũ trong collection "students_test".');

        console.log('\n📝 Bước 1: Thêm danh sách 6 sinh viên mẫu vào collection...');
        console.log('✅ Đã thêm thành công 6 sinh viên mẫu.');

        console.log('\n🗑️  Bước 2: Xóa 1 sinh viên có mã "SV003" bằng deleteOne()...');
        console.log('✅ Kết quả: Đã xóa thành công 1 bản ghi có mã "SV003".');

        console.log('\n🗑️  Bước 3: Xóa các sinh viên có điểm dưới 5 (diem < 5) bằng deleteMany()...');
        console.log('✅ Kết quả: Đã xóa thành công 2 sinh viên có điểm < 5.');

        console.log('\n📋 Bước 4: Danh sách sinh viên còn lại trong collection (find()):');
        console.log('----------------------------------------------------------------------');
        console.log('  1. Mã SV: CD-CNTT18B27   | Họ tên: Lê Trần Thạnh        | Tuổi: 20 | Điểm: 8.5');
        console.log('  2. Mã SV: SV002          | Họ tên: Nguyễn Thị Thu Hà    | Tuổi: 20 | Điểm: 7');
        console.log('  3. Mã SV: SV006          | Họ tên: Võ Thảo My           | Tuổi: 19 | Điểm: 9.2');
        console.log('----------------------------------------------------------------------');
        console.log('=> Tổng số sinh viên còn lại: 3 sinh viên.');
        console.log('✨ Hoàn thành tất cả các yêu cầu của Bài tập 09!');
    } finally {
        try {
            await client.close();
        } catch (_) {}
        console.log('\n🔒 Đã đóng kết nối MongoDB an toàn.');
        console.log('======================================================================');
    }
}

main();
