# BÀI TẬP 03 - BT05: TRUY VẤN NÂNG CAO ($gte), SẮP XẾP (sort) VÀ CẬP NHẬT ($set) MONGODB

## 📌 Yêu cầu đề bài
> **Yêu cầu bài thực hành:** Tạo tập tin `bai05.js`, sử dụng collection `students` của Bài 4:
> - Tìm các sinh viên có `diem >= 7` bằng `find()` và `$gte`.
> - Sắp xếp kết quả theo điểm giảm dần bằng `sort()`.
> - Cập nhật điểm của một sinh viên theo `masv` bằng `updateOne()` và `$set`.
> - Hiển thị lại thông tin sau cập nhật để kiểm tra kết quả.
> - Chạy: `node bai05.js`
> - Kết quả: Hiển thị danh sách lọc, sắp xếp đúng và điểm sinh viên được cập nhật thành công.

---

## 👨‍🎓 Thông tin sinh viên
* **Họ và tên:** Lê Trần Thạnh
* **Mã sinh viên (MSSV):** CD-CNTT18B27
* **Lớp:** CĐ-CNTT18B
* **Trường:** Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang
* **Repository GitHub:** [https://github.com/Billmtp/Node.js](https://github.com/Billmtp/Node.js)
* **Đường dẫn thư mục:** `Bài 03/Node js/Bai03/bt5`

---

## 🛠️ Cấu trúc thư mục
```
Bài 03/Node js/Bai03/bt5/
├── bai05.js         # Mã nguồn lọc $gte, sắp xếp sort() và updateOne() $set
├── package.json     # Cấu hình dự án và thư viện mongodb
├── screenshot.png   # Ảnh chụp thực tế kết quả chạy trên Terminal
└── README.md        # Hướng dẫn chi tiết cách chạy và mô tả các bước
```

---

## 🚀 Các bước thực hiện & Hướng dẫn chạy code

### Bước 1: Mở Terminal / PowerShell và chuyển vào thư mục bài tập
```powershell
cd "Bài 03/Node js/Bai03/bt5"
```
📸 **Ảnh chụp màn hình thực tế lệnh `cd`:**

![Bước 1: Chuyển thư mục cd](./step1_cd.png)

### Bước 2: Chạy chương trình truy vấn và cập nhật
```powershell
node bai05.js
```
*(Hoặc dùng lệnh `npm start`)*

📸 **Ảnh chụp màn hình thực tế khi chạy lệnh và kết quả MongoDB:**

![Bước 2: Chạy lệnh node bai05.js và kết quả](./step2_run.png)

---

## 📊 Kết quả thực thi trong Terminal
Khi chạy lệnh `node bai05.js`, màn hình xuất ra đầy đủ kết quả:

```text
======================================================================
     BÀI 03 - BÀI TẬP 05 (bt5): LỌC ($gte), SẮP XẾP VÀ CẬP NHẬT ($set) 
======================================================================
👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)
🏫 Lớp                 : CĐ-CNTT18B
📂 Database: "qlsinhvien" | Collection: "students"
----------------------------------------------------------------------
⏳ Đang kết nối tới máy chủ MongoDB...
✅ Kết nối MongoDB thành công!

🎯 BƯỚC 1: LỌC SINH VIÊN CÓ ĐIỂM >= 7 VÀ SẮP XẾP GIẢM DẦN (sort({ diem: -1 })):
----------------------------------------------------------------------
  Top 1 | Mã: SV004          | Họ tên: Võ Thảo My           | Tuổi: 19 | Điểm: 9.2
  Top 2 | Mã: CD-CNTT18B27   | Họ tên: Lê Trần Thạnh        | Tuổi: 20 | Điểm: 8.5
  Top 3 | Mã: SV003          | Họ tên: Trần Hoàng Long      | Tuổi: 21 | Điểm: 7.0
----------------------------------------------------------------------
=> Tìm thấy 3 sinh viên có điểm từ 7.0 trở lên.

✍️  BƯỚC 2: CẬP NHẬT ĐIỂM CHO SINH VIÊN CÓ MÃ "SV002" BẰNG updateOne() & $set...
✅ Kết quả: Đã tìm thấy 1 bản ghi, cập nhật thành công 1 bản ghi sang điểm mới: 7.8.

🔍 BƯỚC 3: KIỂM TRA LẠI THÔNG TIN SINH VIÊN SAU KHI CẬP NHẬT:
----------------------------------------------------------------------
  👉 Thông tin mới: Mã SV: SV002 | Họ tên: Nguyễn Thị Thu Hà | Tuổi: 20 | Điểm: 7.8

📋 TOÀN BỘ DANH SÁCH SINH VIÊN HIỆN TẠI TRONG DATABASE:
  1. [CD-CNTT18B27] Lê Trần Thạnh        | Tuổi: 20 | Điểm: 8.5
  2. [SV002] Nguyễn Thị Thu Hà    | Tuổi: 20 | Điểm: 7.8
  3. [SV003] Trần Hoàng Long      | Tuổi: 21 | Điểm: 7.0
  4. [SV004] Võ Thảo My           | Tuổi: 19 | Điểm: 9.2
----------------------------------------------------------------------
✨ Đã hoàn thành toàn bộ yêu cầu của Bài tập 05!

🔒 Đã đóng kết nối MongoDB an toàn.
======================================================================
```

---

## 🔍 Giải thích các toán tử MongoDB trong mã nguồn
1. **Toán tử so sánh `$gte` (Greater Than or Equal):**
   * Cú pháp: `{ diem: { $gte: 7 } }` giúp lọc ra tất cả tài liệu có trường `diem` lớn hơn hoặc bằng 7.0.
2. **Phương thức sắp xếp `.sort()`:**
   * Cú pháp: `.sort({ diem: -1 })` với `-1` biểu thị thứ tự giảm dần (từ cao xuống thấp).
3. **Cập nhật với `updateOne()` và `$set`:**
   * Cú pháp: `await collection.updateOne({ masv: 'SV002' }, { $set: { diem: 7.8 } });`
   * Chỉ cập nhật đúng trường `diem` của sinh viên thỏa mãn điều kiện `masv` mà không ghi đè mất các trường dữ liệu khác.

---

## 📸 Hình ảnh minh chứng kết quả chạy thực tế

Ảnh chụp màn hình thực tế khi chạy lệnh `node bai05.js` trên máy:

![Minh chứng kết quả chạy Bài 03 - bt5](./screenshot.png)
