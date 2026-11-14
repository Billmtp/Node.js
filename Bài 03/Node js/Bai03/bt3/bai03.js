/**
 * BÀI 03 - BÀI TẬP 03 (bt3)
 * 
 * Yêu cầu: Tạo tập tin bai03.js sử dụng module fs:
 * - Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên.
 * - Đọc và hiển thị nội dung tập tin lên Terminal.
 * - Ghi nối thêm tên lớp vào cuối tập tin bằng appendFile().
 * - Đọc lại tập tin để chứng minh nội dung đã được cập nhật.
 * 
 * Chạy lệnh: node bai03.js
 * Kết quả: Tập tin được tạo, cập nhật và Terminal hiển thị đầy đủ nội dung sau cập nhật.
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'thongtin.txt');

console.log('======================================================================');
console.log('       BÀI 03 - BÀI TẬP 03 (bt3): THAO TÁC TẬP TIN VỚI MODULE FS      ');
console.log('======================================================================');
console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
console.log('🏫 Lớp                 : CĐ-CNTT18B');
console.log('----------------------------------------------------------------------');

// Bước 1: Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên
const noiDungBanDau = `Họ và tên: Lê Trần Thạnh\nMã sinh viên: CD-CNTT18B27`;

fs.writeFile(filePath, noiDungBanDau, 'utf8', (err) => {
    if (err) {
        console.error('❌ Lỗi khi tạo file:', err.message);
        return;
    }
    console.log('✅ Bước 1: Đã tạo thành công tập tin "thongtin.txt"!');

    // Bước 2: Đọc và hiển thị nội dung tập tin lên Terminal
    fs.readFile(filePath, 'utf8', (err, data1) => {
        if (err) {
            console.error('❌ Lỗi khi đọc file lần 1:', err.message);
            return;
        }
        console.log('\n📄 Bước 2: Nội dung ban đầu trong file thongtin.txt:');
        console.log('--------------------------------------------------');
        console.log(data1);
        console.log('--------------------------------------------------');

        // Bước 3: Ghi nối thêm tên lớp vào cuối tập tin bằng appendFile()
        const noiDungNoiThem = `\nLớp: CĐ-CNTT18B`;
        fs.appendFile(filePath, noiDungNoiThem, 'utf8', (err) => {
            if (err) {
                console.error('❌ Lỗi khi ghi nối file:', err.message);
                return;
            }
            console.log('\n✍️  Bước 3: Đã dùng appendFile() để ghi nối thêm tên lớp thành công!');

            // Bước 4: Đọc lại tập tin để chứng minh nội dung đã được cập nhật
            fs.readFile(filePath, 'utf8', (err, data2) => {
                if (err) {
                    console.error('❌ Lỗi khi đọc file lần 2:', err.message);
                    return;
                }
                console.log('\n🎉 Bước 4: Đọc lại file - CHỨNG MINH NỘI DUNG ĐÃ ĐƯỢC CẬP NHẬT:');
                console.log('==================================================');
                console.log(data2);
                console.log('==================================================');
                console.log('✨ Hoàn thành tất cả các yêu cầu của Bài tập 03!');
            });
        });
    });
});
