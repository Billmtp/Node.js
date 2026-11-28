/**
 * MODULE XỬ LÝ ĐIỂM SINH VIÊN (xulyDiem.js)
 * 
 * Yêu cầu:
 * - Xây dựng các hàm tính điểm trung bình của 3 môn.
 * - Xếp loại học tập:
 *   + Giỏi: từ 8.0 trở lên
 *   + Khá: từ 6.5 đến cận 8.0
 *   + Trung bình: từ 5.0 đến cận 6.5
 *   + Yếu: dưới 5.0
 * - Xuất các hàm bằng module.exports.
 * 
 * Sinh viên: Lê Trần Thạnh
 * MSSV: CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 */

// Hàm tính điểm trung bình của 3 môn
function tinhDiemTrungBinh(mon1, mon2, mon3) {
    const dtb = (mon1 + mon2 + mon3) / 3;
    return parseFloat(dtb.toFixed(2));
}

// Hàm xếp loại học tập dựa trên điểm trung bình
function xepLoaiHocTap(dtb) {
    if (dtb >= 8.0) {
        return 'Giỏi';
    } else if (dtb >= 6.5) {
        return 'Khá';
    } else if (dtb >= 5.0) {
        return 'Trung bình';
    } else {
        return 'Yếu';
    }
}

// Xuất các hàm qua module.exports
module.exports = {
    tinhDiemTrungBinh,
    xepLoaiHocTap
};
