/**
 * BÀI 03 - BÀI TẬP 02 (bt2)
 * 
 * Yêu cầu:
 * - Tiếp tục phát triển từ danh sách sinh viên của Bài 01.
 * - Sử dụng hàm mũi tên (Arrow Function) kết hợp các phương thức mảng ES6:
 *   + Tính điểm trung bình chung của cả lớp bằng phương thức `.reduce()`.
 *   + Tìm ra sinh viên có điểm số cao nhất trong danh sách.
 *   + Phân loại học lực từng sinh viên (Xuất sắc >= 9, Giỏi >= 8, Khá >= 6.5, Trung bình >= 5, Yếu < 5).
 * - Hiển thị kết quả thống kê ra màn hình console.
 * 
 * Chạy lệnh: node bai02.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }

    // Phương thức xếp loại học lực
    xepLoai() {
        if (this.diem >= 9.0) return 'Xuất sắc';
        if (this.diem >= 8.0) return 'Giỏi';
        if (this.diem >= 6.5) return 'Khá';
        if (this.diem >= 5.0) return 'Trung bình';
        return 'Yếu';
    }
}

// Khai báo danh sách 5 sinh viên
const danhSachSinhVien = [
    new SinhVien('CD-CNTT18B27', 'Lê Trần Thạnh', 20, 8.5),
    new SinhVien('SV002', 'Nguyễn Thị Thu Hà', 20, 4.5),
    new SinhVien('SV003', 'Trần Hoàng Long', 21, 7.0),
    new SinhVien('SV004', 'Phạm Minh Tuấn', 20, 3.8),
    new SinhVien('SV005', 'Võ Thảo My', 19, 9.2)
];

console.log('======================================================================');
console.log('       BÀI 03 - BÀI TẬP 02 (bt2): THỐNG KÊ & XẾP LOẠI SINH VIÊN       ');
console.log('======================================================================');
console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
console.log('🏫 Lớp                 : CĐ-CNTT18B');
console.log('----------------------------------------------------------------------');

// 1. Hiển thị danh sách kèm xếp loại học lực
console.log('\n📋 DANH SÁCH SINH VIÊN VÀ XẾP LOẠI HỌC LỰC:');
danhSachSinhVien.forEach((sv, idx) => {
    console.log(`  ${idx + 1}. [${sv.ma}] ${sv.hoTen.padEnd(20)} | Điểm: ${sv.diem} | Xếp loại: ${sv.xepLoai()}`);
});

// 2. Tính điểm trung bình cả lớp sử dụng reduce() và arrow function
const tongDiem = danhSachSinhVien.reduce((tong, sv) => tong + sv.diem, 0);
const diemTrungBinh = (tongDiem / danhSachSinhVien.length).toFixed(2);

// 3. Tìm sinh viên có điểm số cao nhất (Thủ khoa)
const sinhVienThuKhoa = danhSachSinhVien.reduce((max, sv) => (sv.diem > max.diem ? sv : max), danhSachSinhVien[0]);

console.log('\n📊 THỐNG KÊ KẾT QUẢ HỌC TẬP:');
console.log('----------------------------------------------------------------------');
console.log(`  👉 Tổng số sinh viên : ${danhSachSinhVien.length} sinh viên`);
console.log(`  👉 Điểm trung bình   : ${diemTrungBinh} / 10`);
console.log(`  🏆 Sinh viên thủ khoa : ${sinhVienThuKhoa.hoTen} (${sinhVienThuKhoa.ma}) với số điểm ${sinhVienThuKhoa.diem} (Xếp loại: ${sinhVienThuKhoa.xepLoai()})`);
console.log('======================================================================');
