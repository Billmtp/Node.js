/**
 * BÀI 01: KHỞI TẠO MÔI TRƯỜNG NODE.JS & CHƯƠNG TRÌNH HELLO.JS
 * 
 * Yêu cầu:
 * - Cài Node.js LTS;
 * - Chạy node -v và npm -v;
 * - Tạo một file hello.js và mô tả kết quả;
 * - Nộp liên kết repository GitHub hoặc ghi chú minh chứng.
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

console.log('============================================================');
console.log('  CHƯƠNG TRÌNH ĐẦU TIÊN VỚI NODE.JS (HELLO.JS) - BÀI 01');
console.log('============================================================');

// 1. Lời chào mừng
console.log('👋 Hello, World! Xin chào thầy cô và các bạn!');
console.log('🚀 Ứng dụng Node.js đã được cài đặt và thực thi thành công.');

console.log('\n--- THÔNG TIN SINH VIÊN ---');
console.log('👤 Họ và tên        : Lê Trần Thạnh');
console.log('🆔 Mã sinh viên     : CD-CNTT18B27');
console.log('🏫 Lớp học          : CĐ-CNTT18B');
console.log('🏢 Đơn vị đào tạo   : Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang');

console.log('\n--- THÔNG TIN MÔI TRƯỜNG MÁY CHỦ ---');
console.log(`📌 Phiên bản Node.js: ${process.version}`);
console.log(`💻 Hệ điều hành     : ${process.platform} (${process.arch})`);
console.log(`⏰ Thời gian chạy   : ${new Date().toLocaleString('vi-VN')}`);
console.log('============================================================');
