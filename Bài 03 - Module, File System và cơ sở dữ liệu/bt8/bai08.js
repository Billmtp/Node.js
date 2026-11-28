/**
 * BÀI 03 - BÀI TẬP 08 (bt8): QUẢN LÝ THƯ MỤC VÀ TẬP TIN VỚI MODULE FS
 * 
 * Yêu cầu:
 * - Sử dụng module fs tạo thư mục data và tập tin ghichu.txt.
 * - Ghi vào tập tin ít nhất 3 dòng nội dung.
 * - Đổi tên tập tin thành ghichu_moi.txt bằng fs.rename().
 * - Đọc và hiển thị nội dung sau khi đổi tên.
 * - Tạo tập tin tam.txt, sau đó xóa bằng fs.unlink().
 * - Hiển thị thông báo kết quả từng thao tác.
 * 
 * Lệnh chạy: node bai08.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const fileGhiChu = path.join(dataDir, 'ghichu.txt');
const fileGhiChuMoi = path.join(dataDir, 'ghichu_moi.txt');
const fileTam = path.join(dataDir, 'tam.txt');

console.log('======================================================================');
console.log('       BÀI 03 - BÀI TẬP 08 (bt8): QUẢN LÝ THƯ MỤC & TẬP TIN FS         ');
console.log('======================================================================');
console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
console.log('🏫 Lớp                 : CĐ-CNTT18B');
console.log('📦 Module sử dụng      : fs (File System)');
console.log('----------------------------------------------------------------------');

// 1. Tạo thư mục data nếu chưa tồn tại
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
    console.log('📁 Bước 1: Đã tạo thư mục "data" thành công.');
} else {
    console.log('📁 Bước 1: Thư mục "data" đã sẵn sàng.');
}

// 2. Ghi ít nhất 3 dòng nội dung vào tập tin ghichu.txt
const noiDungGhiChu = [
    'Dòng 1: Họ và tên sinh viên: Lê Trần Thạnh - MSSV: CD-CNTT18B27',
    'Dòng 2: Lớp: CĐ-CNTT18B - Trường CĐ Kỹ thuật Công nghệ Nha Trang',
    'Dòng 3: Thực hành Node.js - Quản lý thư mục và tập tin với module fs'
].join('\n');

fs.writeFileSync(fileGhiChu, noiDungGhiChu, 'utf-8');
console.log('✍️  Bước 2: Đã tạo và ghi 3 dòng nội dung vào tập tin "ghichu.txt".');

// 3. Đổi tên tập tin ghichu.txt thành ghichu_moi.txt bằng fs.rename()
if (fs.existsSync(fileGhiChuMoi)) {
    fs.unlinkSync(fileGhiChuMoi);
}
fs.renameSync(fileGhiChu, fileGhiChuMoi);
console.log('🔄 Bước 3: Đã đổi tên tập tin "ghichu.txt" -> "ghichu_moi.txt" bằng fs.rename().');

// 4. Đọc và hiển thị nội dung sau khi đổi tên
const noiDungDocLai = fs.readFileSync(fileGhiChuMoi, 'utf-8');
console.log('\n📖 Bước 4: Đọc nội dung tập tin "ghichu_moi.txt" sau khi đổi tên:');
console.log('----------------------------------------------------------------------');
console.log(noiDungDocLai);
console.log('----------------------------------------------------------------------');

// 5. Tạo tập tin tam.txt, sau đó xóa bằng fs.unlink()
fs.writeFileSync(fileTam, 'Đây là nội dung thử nghiệm trong tập tin tạm thời.', 'utf-8');
console.log('📄 Bước 5.1: Đã tạo tập tin tạm "tam.txt".');

fs.unlinkSync(fileTam);
console.log('🗑️  Bước 5.2: Đã xóa tập tin tạm "tam.txt" thành công bằng fs.unlink().');

console.log('\n✨ Hoàn thành tất cả các yêu cầu của Bài tập 08!');
console.log('======================================================================');
