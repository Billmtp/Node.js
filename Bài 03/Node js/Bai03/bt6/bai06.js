/**
 * BÀI 03 - BÀI TẬP 06 (bt6): MODULE HÓA VỚI MODULE.EXPORTS VÀ REQUIRE()
 * 
 * Yêu cầu:
 * - Tạo hai tập tin bai06.js và xulyDiem.js.
 * - Trong xulyDiem.js: xây dựng các hàm tính điểm trung bình của 3 môn và xếp loại học tập:
 *   Giỏi (từ 8), Khá (từ 6.5), Trung bình (từ 5), Yếu (dưới 5).
 * - Xuất các hàm bằng module.exports.
 * - Trong bai06.js: sử dụng require() để gọi các hàm.
 * - Tạo dữ liệu 3 sinh viên, hiển thị họ tên, điểm trung bình và xếp loại trên Terminal.
 * 
 * Lệnh chạy: node bai06.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

// Sử dụng require() để import các hàm từ module xulyDiem
const { tinhDiemTrungBinh, xepLoaiHocTap } = require('./xulyDiem');

// Khởi tạo dữ liệu 3 sinh viên kèm điểm 3 môn
const danhSachSinhVien = [
    {
        masv: 'CD-CNTT18B27',
        hoten: 'Lê Trần Thạnh',
        diemMon: [8.5, 9.0, 8.0]
    },
    {
        masv: 'SV002',
        hoten: 'Nguyễn Thị Thu Hà',
        diemMon: [7.0, 6.5, 7.5]
    },
    {
        masv: 'SV003',
        hoten: 'Trần Hoàng Long',
        diemMon: [5.0, 5.5, 6.0]
    }
];

console.log('======================================================================');
console.log('       BÀI 03 - BÀI TẬP 06 (bt6): TÍNH ĐIỂM TRUNG BÌNH & XẾP LOẠI     ');
console.log('======================================================================');
console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
console.log('🏫 Lớp                 : CĐ-CNTT18B');
console.log('📦 Module sử dụng      : ./xulyDiem.js (require)');
console.log('----------------------------------------------------------------------');
console.log('📋 KẾT QUẢ ĐIỂM TRUNG BÌNH VÀ XẾP LOẠI 3 SINH VIÊN:\n');

danhSachSinhVien.forEach((sv, index) => {
    const [m1, m2, m3] = sv.diemMon;
    const dtb = tinhDiemTrungBinh(m1, m2, m3);
    const xepLoai = xepLoaiHocTap(dtb);

    console.log(`  ${index + 1}. [${sv.masv}] ${sv.hoten.padEnd(20)}`);
    console.log(`     - Điểm 3 môn   : Môn 1 = ${m1} | Môn 2 = ${m2} | Môn 3 = ${m3}`);
    console.log(`     - Điểm TB      : ${dtb.toFixed(2)}`);
    console.log(`     - Xếp loại     : ${xepLoai}`);
    console.log('----------------------------------------------------------------------');
});

console.log('✨ Hoàn thành tất cả các yêu cầu của Bài tập 06!');
console.log('======================================================================');
