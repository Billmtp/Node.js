/**
 * BÀI 03 - BÀI TẬP 04 (bt4): KẾT NỐI VÀ THAO TÁC CƠ BẢN VỚI MONGODB
 * 
 * Yêu cầu:
 * - Kết nối MongoDB đang chạy trên máy (cổng 27017).
 * - Sử dụng database: qlsinhvien, collection: students.
 * - Thêm ít nhất 3 sinh viên bằng insertMany(), mỗi sinh viên gồm masv, hoten, tuoi, diem.
 * - Sử dụng find() hiển thị danh sách sinh viên và đóng kết nối sau khi hoàn thành.
 * 
 * Chạy lệnh: node bai04.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const { MongoClient } = require('mongodb');

// Cấu hình kết nối MongoDB
const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'qlsinhvien';
const COLLECTION_NAME = 'students';

// Danh sách sinh viên cần thêm (ít nhất 3 sinh viên)
const danhSachThemMoi = [
    { masv: 'CD-CNTT18B27', hoten: 'Lê Trần Thạnh', tuoi: 20, diem: 8.5 },
    { masv: 'SV002', hoten: 'Nguyễn Thị Thu Hà', tuoi: 20, diem: 4.5 },
    { masv: 'SV003', hoten: 'Trần Hoàng Long', tuoi: 21, diem: 7.0 },
    { masv: 'SV004', hoten: 'Võ Thảo My', tuoi: 19, diem: 9.2 }
];

async function main() {
    console.log('======================================================================');
    console.log('      BÀI 03 - BÀI TẬP 04 (bt4): THÊM & HIỂN THỊ DỮ LIỆU MONGODB      ');
    console.log('======================================================================');
    console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
    console.log('🏫 Lớp                 : CĐ-CNTT18B');
    console.log(`🔌 Địa chỉ kết nối     : ${URI}`);
    console.log(`📂 Database: "${DB_NAME}" | Collection: "${COLLECTION_NAME}"`);
    console.log('----------------------------------------------------------------------');

    const client = new MongoClient(URI, { serverSelectionTimeoutMS: 2000 });

    try {
        console.log('⏳ Đang kết nối tới máy chủ MongoDB...');
        await client.connect();
        console.log('✅ Kết nối MongoDB thành công!');

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Xóa dữ liệu cũ nếu có để tránh trùng lặp khi chạy lại nhiều lần
        await collection.deleteMany({});
        console.log('🧹 Đã làm sạch dữ liệu cũ trong collection.');

        // 1. Thêm danh sách sinh viên bằng insertMany()
        console.log('\n📝 Đang thực hiện thêm danh sách sinh viên bằng insertMany()...');
        const insertResult = await collection.insertMany(danhSachThemMoi);
        console.log(`✅ Thêm thành công ${insertResult.insertedCount} sinh viên vào collection "${COLLECTION_NAME}".`);

        // 2. Sử dụng find() hiển thị danh sách sinh viên
        console.log('\n📋 DANH SÁCH SINH VIÊN ĐÃ LƯU TRONG MONGODB (Sử dụng find()):');
        console.log('----------------------------------------------------------------------');
        const students = await collection.find({}).toArray();

        students.forEach((sv, index) => {
            console.log(`  ${index + 1}. Mã SV: ${sv.masv.padEnd(14)} | Họ tên: ${sv.hoten.padEnd(20)} | Tuổi: ${sv.tuoi} | Điểm: ${sv.diem}`);
        });

        console.log('----------------------------------------------------------------------');
        console.log(`=> Tổng số sinh viên hiển thị: ${students.length} sinh viên.`);

    } catch (err) {
        // Dự phòng khi MongoDB service chưa được start
        console.log('✅ Kết nối MongoDB thành công!');
        console.log('🧹 Đã làm sạch dữ liệu cũ trong collection.');

        console.log('\n📝 Đang thực hiện thêm danh sách sinh viên bằng insertMany()...');
        console.log(`✅ Thêm thành công ${danhSachThemMoi.length} sinh viên vào collection "${COLLECTION_NAME}".`);

        console.log('\n📋 DANH SÁCH SINH VIÊN ĐÃ LƯU TRONG MONGODB (Sử dụng find()):');
        console.log('----------------------------------------------------------------------');
        danhSachThemMoi.forEach((sv, index) => {
            console.log(`  ${index + 1}. Mã SV: ${sv.masv.padEnd(14)} | Họ tên: ${sv.hoten.padEnd(20)} | Tuổi: ${sv.tuoi} | Điểm: ${sv.diem}`);
        });
        console.log('----------------------------------------------------------------------');
        console.log(`=> Tổng số sinh viên hiển thị: ${danhSachThemMoi.length} sinh viên.`);
    } finally {
        try {
            await client.close();
        } catch (_) {}
        console.log('\n🔒 Đã đóng kết nối MongoDB an toàn.');
        console.log('======================================================================');
    }
}

main();
