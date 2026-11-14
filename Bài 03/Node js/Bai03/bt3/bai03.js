/**
 * BÀI 03 - BÀI TẬP 03 (bt3)
 * 
 * Yêu cầu:
 * - Tiếp tục phát triển danh sách sinh viên.
 * - Sử dụng hàm mũi tên (Arrow Function) kết hợp phương thức `.sort()` để sắp xếp
 *   danh sách sinh viên theo thứ tự điểm số giảm dần (từ cao xuống thấp).
 * - Sử dụng Promise và async/await mô phỏng quá trình tải và xử lý dữ liệu bất đồng bộ.
 * - Hiển thị bảng xếp hạng sinh viên ra màn hình console.
 * 
 * Chạy lệnh: node bai03.js
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
}

// Khai báo danh sách 5 sinh viên ban đầu
const danhSachSinhVien = [
    new SinhVien('CD-CNTT18B27', 'Lê Trần Thạnh', 20, 8.5),
    new SinhVien('SV002', 'Nguyễn Thị Thu Hà', 20, 4.5),
    new SinhVien('SV003', 'Trần Hoàng Long', 21, 7.0),
    new SinhVien('SV004', 'Phạm Minh Tuấn', 20, 3.8),
    new SinhVien('SV005', 'Võ Thảo My', 19, 9.2)
];

// Hàm mô phỏng xử lý bất đồng bộ tải dữ liệu sinh viên
const layDanhSachSinhVienAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...danhSachSinhVien]);
        }, 300);
    });
};

async function chayChuongTrinh() {
    console.log('======================================================================');
    console.log('       BÀI 03 - BÀI TẬP 03 (bt3): SẮP XẾP BẢNG XẾP HẠNG SINH VIÊN     ');
    console.log('======================================================================');
    console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
    console.log('🏫 Lớp                 : CĐ-CNTT18B');
    console.log('----------------------------------------------------------------------');
    console.log('⏳ Đang đồng bộ và xử lý dữ liệu sinh viên...');

    const danhSach = await layDanhSachSinhVienAsync();

    // Sử dụng hàm mũi tên để sắp xếp danh sách theo điểm giảm dần (b.diem - a.diem)
    const danhSachSapXep = danhSach.sort((a, b) => b.diem - a.diem);

    console.log('\n🏆 BẢNG XẾP HẠNG SINH VIÊN THEO ĐIỂM SỐ (GIẢM DẦN):');
    console.log('----------------------------------------------------------------------');
    console.log(' Hạng | Mã SV          | Họ và tên            | Tuổi | Điểm');
    console.log('----------------------------------------------------------------------');
    danhSachSapXep.forEach((sv, index) => {
        const hang = `Top ${index + 1}`.padEnd(5);
        const ma = sv.ma.padEnd(14);
        const ten = sv.hoTen.padEnd(20);
        console.log(`  ${hang} | ${ma} | ${ten} |  ${sv.tuoi}  | ${sv.diem}`);
    });
    console.log('----------------------------------------------------------------------');
    console.log('✅ Đã hoàn thành sắp xếp và hiển thị toàn bộ danh sách thành công.');
    console.log('======================================================================');
}

chayChuongTrinh();
