# BÀI TẬP 03 - BT02: THỐNG KÊ ĐIỂM TRUNG BÌNH & XẾP LOẠI HỌC LỰC

## 📌 Yêu cầu bài tập
> **Nội dung:**
> - Tiếp tục phát triển đối tượng `SinhVien` từ Bt01.
> - Bổ sung phương thức `xepLoai()` đánh giá học lực (Xuất sắc, Giỏi, Khá, Trung bình, Yếu).
> - Sử dụng hàm mũi tên (Arrow Function) và hàm `.reduce()` để tính điểm trung bình chung của lớp.
> - Tìm sinh viên có điểm số cao nhất (Thủ khoa) và hiển thị kết quả ra màn hình.

---

## 👨‍🎓 Thông tin sinh viên
* **Họ và tên:** Lê Trần Thạnh
* **Mã sinh viên (MSSV):** CD-CNTT18B27
* **Lớp:** CĐ-CNTT18B
* **Trường:** Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang
* **Repository GitHub:** [https://github.com/Billmtp/Node.js](https://github.com/Billmtp/Node.js)
* **Đường dẫn thư mục:** `Bài 03/Node js/Bai03/bt2`

---

## 🛠️ Cấu trúc thư mục
```
Bài 03/Node js/Bai03/bt2/
├── bai02.js         # Mã nguồn tính toán điểm trung bình và xếp loại sinh viên
├── package.json     # Cấu hình dự án và npm script
├── screenshot.png   # Ảnh chụp thực tế kết quả chạy lệnh trong Terminal
└── README.md        # Hướng dẫn chi tiết cách chạy và mô tả kết quả
```

---

## 🚀 Hướng dẫn các bước chạy code

### Bước 1: Mở Terminal / PowerShell và chuyển vào thư mục bài tập
```powershell
cd "Bài 03/Node js/Bai03/bt2"
```

### Bước 2: Chạy chương trình
```powershell
node bai02.js
```
*(Hoặc dùng lệnh `npm start`)*

---

## 📊 Kết quả thực thi trong Terminal
Khi chạy lệnh `node bai02.js`, màn hình terminal xuất ra:

```text
======================================================================
       BÀI 03 - BÀI TẬP 02 (bt2): THỐNG KÊ & XẾP LOẠI SINH VIÊN       
======================================================================
👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)
🏫 Lớp                 : CĐ-CNTT18B
----------------------------------------------------------------------

📋 DANH SÁCH SINH VIÊN VÀ XẾP LOẠI HỌC LỰC:
  1. [CD-CNTT18B27] Lê Trần Thạnh        | Điểm: 8.5 | Xếp loại: Giỏi
  2. [SV002] Nguyễn Thị Thu Hà    | Điểm: 4.5 | Xếp loại: Yếu
  3. [SV003] Trần Hoàng Long      | Điểm: 7 | Xếp loại: Khá
  4. [SV004] Phạm Minh Tuấn       | Điểm: 3.8 | Xếp loại: Yếu
  5. [SV005] Võ Thảo My           | Điểm: 9.2 | Xếp loại: Xuất sắc

📊 THỐNG KÊ KẾT QUẢ HỌC TẬP:
----------------------------------------------------------------------
  👉 Tổng số sinh viên : 5 sinh viên
  👉 Điểm trung bình   : 6.60 / 10
  🏆 Sinh viên thủ khoa : Võ Thảo My (SV005) với số điểm 9.2 (Xếp loại: Xuất sắc)
======================================================================
```

---

## 📸 Hình ảnh minh chứng kết quả chạy thực tế

Ảnh chụp màn hình thực tế khi chạy lệnh `node bai02.js` trên máy:

![Minh chứng kết quả chạy Bài 03 - bt2](./screenshot.png)
