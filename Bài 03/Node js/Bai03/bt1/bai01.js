/**
 * BÀI 03 - BÀI TẬP 01 (bt1)
 * 
 * Yêu cầu:
 * - Khai báo danh sách 5 sinh viên, mỗi sinh viên gồm mã, họ tên, tuổi và điểm.
 * - Sử dụng class, constructor để biểu diễn sinh viên.
 * - Sử dụng hàm mũi tên arrow function để lọc sinh viên có điểm từ 5 trở lên.
 * - Hiển thị danh sách sinh viên đạt yêu cầu bằng console.log().
 * 
 * Chạy lệnh: node bai01.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

// 1. Sử dụng class và constructor để biểu diễn đối tượng SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }

    // Phương thức hiển thị thông tin dạng chuỗi
    thongTin() {
        return `[${this.ma}] ${this.hoTen} - ${this.tuoi} tuổi | Điểm: ${this.diem}`;
    }
}

// 2. Khai báo danh sách 5 sinh viên
const danhSachSinhVien = [
    new SinhVien('CD-CNTT18B27', 'Lê Trần Thạnh', 20, 8.5),
    new SinhVien('SV002', 'Nguyễn Thị Thu Hà', 20, 4.5),
    new SinhVien('SV003', 'Trần Hoàng Long', 21, 7.0),
    new SinhVien('SV004', 'Phạm Minh Tuấn', 20, 3.8),
    new SinhVien('SV005', 'Võ Thảo My', 19, 9.2)
];

console.log('======================================================================');
console.log('                 BÀI 03 - BÀI TẬP 01 (bt1): QUẢN LÝ SINH VIÊN        ');
console.log('======================================================================');
console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
console.log('🏫 Lớp                 : CĐ-CNTT18B');
console.log('----------------------------------------------------------------------');

// Hiển thị toàn bộ danh sách 5 sinh viên ban đầu
console.log('\n📋 DANH SÁCH TOÀN BỘ 5 SINH VIÊN BAN ĐẦU:');
danhSachSinhVien.forEach((sv, index) => {
    console.log(`  ${index + 1}. ${sv.thongTin()}`);
});

// 3. Sử dụng hàm mũi tên (Arrow Function) để lọc sinh viên có điểm từ 5 trở lên
const sinhVienDatYeuCau = danhSachSinhVien.filter(sv => sv.diem >= 5);

// 4. Hiển thị danh sách sinh viên đạt yêu cầu bằng console.log()
console.log('\n🎯 DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU (ĐIỂM >= 5):');
console.log('----------------------------------------------------------------------');
if (sinhVienDatYeuCau.length === 0) {
    console.log('  Không có sinh viên nào đạt điểm từ 5 trở lên.');
} else {
    sinhVienDatYeuCau.forEach((sv, index) => {
        console.log(`  ${index + 1}. Mã: ${sv.ma.padEnd(14)} | Họ tên: ${sv.hoTen.padEnd(20)} | Tuổi: ${sv.tuoi} | Điểm: ${sv.diem}`);
    });
}
console.log('----------------------------------------------------------------------');
console.log(`=> Tổng số sinh viên đạt yêu cầu: ${sinhVienDatYeuCau.length}/${danhSachSinhVien.length} sinh viên.`);
console.log('======================================================================');
