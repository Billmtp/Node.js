# BÀI TẬP 03 - BT03: THAO TÁC VỚI MODULE FS (FILE SYSTEM)

## 📌 Yêu cầu đề bài
> **Yêu cầu bài thực hành:** Tạo tập tin `bai03.js` sử dụng module `fs`:
> - Tạo tập tin `thongtin.txt` chứa họ tên và mã sinh viên.
> - Đọc và hiển thị nội dung tập tin lên Terminal.
> - Ghi nối thêm tên lớp vào cuối tập tin bằng `appendFile()`.
> - Đọc lại tập tin để chứng minh nội dung đã được cập nhật.
> - Chạy: `node bai03.js`
> - Kết quả: Tập tin được tạo, cập nhật và Terminal hiển thị đầy đủ nội dung sau cập nhật.

---

## 👨‍🎓 Thông tin sinh viên
* **Họ và tên:** Lê Trần Thạnh
* **Mã sinh viên (MSSV):** CD-CNTT18B27
* **Lớp:** CĐ-CNTT18B
* **Trường:** Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang
* **Repository GitHub:** [https://github.com/Billmtp/Node.js](https://github.com/Billmtp/Node.js)
* **Đường dẫn thư mục:** `Bài 03/Node js/Bai03/bt3`

---

## 🛠️ Cấu trúc thư mục
```
Bài 03/Node js/Bai03/bt3/
├── bai03.js         # Mã nguồn thao tác đọc/ghi/nối file với module fs
├── package.json     # Cấu hình dự án và npm script
├── thongtin.txt     # Tập tin văn bản được tạo và cập nhật bởi bai03.js
├── screenshot.png   # Ảnh chụp thực tế kết quả chạy trên máy
└── README.md        # Hướng dẫn chi tiết cách chạy và mô tả các bước
```

---

## 🚀 Hướng dẫn các bước chạy code

### Bước 1: Mở Terminal / PowerShell và chuyển vào thư mục bài tập
```powershell
cd "Bài 03/Node js/Bai03/bt3"
```

### Bước 2: Chạy chương trình
```powershell
node bai03.js
```
*(Hoặc dùng lệnh `npm start`)*

---

## 📊 Kết quả thực thi trong Terminal
Khi chạy lệnh `node bai03.js`, màn hình terminal xuất ra:

```text
======================================================================
       BÀI 03 - BÀI TẬP 03 (bt3): THAO TÁC TẬP TIN VỚI MODULE FS      
======================================================================
👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)
🏫 Lớp                 : CĐ-CNTT18B
----------------------------------------------------------------------
✅ Bước 1: Đã tạo thành công tập tin "thongtin.txt"!

📄 Bước 2: Nội dung ban đầu trong file thongtin.txt:
--------------------------------------------------
Họ và tên: Lê Trần Thạnh
Mã sinh viên: CD-CNTT18B27
--------------------------------------------------

✍️  Bước 3: Đã dùng appendFile() để ghi nối thêm tên lớp thành công!

🎉 Bước 4: Đọc lại file - CHỨNG MINH NỘI DUNG ĐÃ ĐƯỢC CẬP NHẬT:
==================================================
Họ và tên: Lê Trần Thạnh
Mã sinh viên: CD-CNTT18B27
Lớp: CĐ-CNTT18B
==================================================
✨ Hoàn thành tất cả các yêu cầu của Bài tập 03!
```

---

## 🔍 Giải thích các bước kỹ thuật trong mã nguồn
1. **Bước 1 (Ghi file mới):**
   * Sử dụng hàm `fs.writeFile(filePath, noiDung, 'utf8', callback)` để tạo mới và ghi Họ tên + Mã sinh viên vào file `thongtin.txt`.
2. **Bước 2 (Đọc file lần 1):**
   * Sử dụng hàm `fs.readFile(filePath, 'utf8', callback)` để đọc nội dung ban đầu và in ra console.
3. **Bước 3 (Ghi nối thêm dữ liệu):**
   * Sử dụng hàm `fs.appendFile(filePath, '\nLớp: CĐ-CNTT18B', 'utf8', callback)` để bổ sung thông tin tên lớp vào cuối file mà không làm mất dữ liệu cũ.
4. **Bước 4 (Đọc lại để chứng minh):**
   * Tiếp tục gọi `fs.readFile()` để đọc lại toàn bộ tập tin, chứng minh nội dung tên lớp đã được ghi nối thành công.

---

## 📸 Hình ảnh minh chứng kết quả chạy thực tế

Ảnh chụp màn hình thực tế khi chạy lệnh `node bai03.js` trên máy:

![Minh chứng kết quả chạy Bài 03 - bt3](./screenshot.png)
