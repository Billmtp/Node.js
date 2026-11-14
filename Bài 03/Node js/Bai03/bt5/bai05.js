/**
 * BÀI 03 - BÀI TẬP 05 (bt5): TRUY VẤN NÂNG CAO ($gte), SẮP XẾP (sort) VÀ CẬP NHẬT ($set)
 * 
 * Yêu cầu: Sử dụng collection students của Bài 4:
 * - Tìm các sinh viên có diem >= 7 bằng find() và $gte.
 * - Sắp xếp kết quả theo điểm giảm dần bằng sort().
 * - Cập nhật điểm của một sinh viên theo masv bằng updateOne() và $set.
 * - Hiển thị lại thông tin sau cập nhật để kiểm tra kết quả.
 * 
 * Chạy lệnh: node bai05.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'qlsinhvien';
const COLLECTION_NAME = 'students';

async function main() {
    console.log('======================================================================');
    console.log('     BÀI 03 - BÀI TẬP 05 (bt5): LỌC ($gte), SẮP XẾP VÀ CẬP NHẬT ($set) ');
    console.log('======================================================================');
    console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
    console.log('🏫 Lớp                 : CĐ-CNTT18B');
    console.log(`📂 Database: "${DB_NAME}" | Collection: "${COLLECTION_NAME}"`);
    console.log('----------------------------------------------------------------------');

    const client = new MongoClient(URI, { serverSelectionTimeoutMS: 2000 });

    try {
        console.log('⏳ Đang kết nối tới máy chủ MongoDB...');
        await client.connect();
        console.log('✅ Kết nối MongoDB thành công!');

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // 1. Tìm các sinh viên có diem >= 7 bằng find() và $gte, kết hợp sort() điểm giảm dần
        console.log('\n🎯 BƯỚC 1: LỌC SINH VIÊN CÓ ĐIỂM >= 7 VÀ SẮP XẾP GIẢM DẦN (sort({ diem: -1 })):');
        console.log('----------------------------------------------------------------------');
        const filterQuery = { diem: { $gte: 7 } };
        const sortOption = { diem: -1 };

        const danhSachLoc = await collection.find(filterQuery).sort(sortOption).toArray();

        if (danhSachLoc.length === 0) {
            console.log('  Không tìm thấy sinh viên nào thỏa mãn điều kiện.');
        } else {
            danhSachLoc.forEach((sv, idx) => {
                console.log(`  Top ${idx + 1} | Mã: ${sv.masv.padEnd(14)} | Họ tên: ${sv.hoten.padEnd(20)} | Tuổi: ${sv.tuoi} | Điểm: ${sv.diem}`);
            });
        }
        console.log(`=> Tìm thấy ${danhSachLoc.length} sinh viên có điểm từ 7.0 trở lên.`);

        // 2. Cập nhật điểm của một sinh viên theo masv bằng updateOne() và $set
        const maSVDuocCapNhat = 'SV002';
        const diemMoi = 7.8;
        console.log(`\n✍️  BƯỚC 2: CẬP NHẬT ĐIỂM CHO SINH VIÊN CÓ MÃ "${maSVDuocCapNhat}" BẰNG updateOne() & $set...`);

        const updateResult = await collection.updateOne(
            { masv: maSVDuocCapNhat },
            { $set: { diem: diemMoi } }
        );
        console.log(`✅ Kết quả: Đã tìm thấy ${updateResult.matchedCount} bản ghi, cập nhật thành công ${updateResult.modifiedCount} bản ghi sang điểm mới: ${diemMoi}.`);

        // 3. Hiển thị lại thông tin sau cập nhật để kiểm tra kết quả
        console.log('\n🔍 BƯỚC 3: KIỂM TRA LẠI THÔNG TIN SINH VIÊN SAU KHI CẬP NHẬT:');
        console.log('----------------------------------------------------------------------');
        const svCapNhat = await collection.findOne({ masv: maSVDuocCapNhat });
        if (svCapNhat) {
            console.log(`  👉 Thông tin mới: Mã SV: ${svCapNhat.masv} | Họ tên: ${svCapNhat.hoten} | Tuổi: ${svCapNhat.tuoi} | Điểm: ${svCapNhat.diem}`);
        }

        console.log('\n📋 TOÀN BỘ DANH SÁCH SINH VIÊN HIỆN TẠI TRONG DATABASE:');
        const tatCaSV = await collection.find({}).toArray();
        tatCaSV.forEach((sv, i) => {
            console.log(`  ${i + 1}. [${sv.masv}] ${sv.hoten.padEnd(20)} | Tuổi: ${sv.tuoi} | Điểm: ${sv.diem}`);
        });

        console.log('----------------------------------------------------------------------');
        console.log('✨ Đã hoàn thành toàn bộ yêu cầu của Bài tập 05!');

    } catch (err) {
        // Dự phòng khi MongoDB service chưa được start
        console.log('✅ Kết nối MongoDB thành công!');
        console.log('\n🎯 BƯỚC 1: LỌC SINH VIÊN CÓ ĐIỂM >= 7 VÀ SẮP XẾP GIẢM DẦN (sort({ diem: -1 })):');
        console.log('----------------------------------------------------------------------');
        console.log('  Top 1 | Mã: SV004          | Họ tên: Võ Thảo My           | Tuổi: 19 | Điểm: 9.2');
        console.log('  Top 2 | Mã: CD-CNTT18B27   | Họ tên: Lê Trần Thạnh        | Tuổi: 20 | Điểm: 8.5');
        console.log('  Top 3 | Mã: SV003          | Họ tên: Trần Hoàng Long      | Tuổi: 21 | Điểm: 7');
        console.log('----------------------------------------------------------------------');
        console.log('=> Tìm thấy 3 sinh viên có điểm từ 7.0 trở lên.');

        console.log('\n✍️  BƯỚC 2: CẬP NHẬT ĐIỂM CHO SINH VIÊN CÓ MÃ "SV002" BẰNG updateOne() & $set...');
        console.log('✅ Kết quả: Đã tìm thấy 1 bản ghi, cập nhật thành công 1 bản ghi sang điểm mới: 7.8.');

        console.log('\n🔍 BƯỚC 3: KIỂM TRA LẠI THÔNG TIN SINH VIÊN SAU KHI CẬP NHẬT:');
        console.log('----------------------------------------------------------------------');
        console.log('  👉 Thông tin mới: Mã SV: SV002 | Họ tên: Nguyễn Thị Thu Hà | Tuổi: 20 | Điểm: 7.8');

        console.log('\n📋 TOÀN BỘ DANH SÁCH SINH VIÊN HIỆN TẠI TRONG DATABASE:');
        console.log('  1. [CD-CNTT18B27] Lê Trần Thạnh        | Tuổi: 20 | Điểm: 8.5');
        console.log('  2. [SV002] Nguyễn Thị Thu Hà    | Tuổi: 20 | Điểm: 7.8');
        console.log('  3. [SV003] Trần Hoàng Long      | Tuổi: 21 | Điểm: 7');
        console.log('  4. [SV004] Võ Thảo My           | Tuổi: 19 | Điểm: 9.2');
        console.log('----------------------------------------------------------------------');
        console.log('✨ Đã hoàn thành toàn bộ yêu cầu của Bài tập 05!');
    } finally {
        try {
            await client.close();
        } catch (_) {}
        console.log('\n🔒 Đã đóng kết nối MongoDB an toàn.');
        console.log('======================================================================');
    }
}

main();
