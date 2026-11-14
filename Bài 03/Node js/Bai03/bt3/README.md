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
├── step1_cd.png     # Ảnh chụp thực tế lệnh di chuyển thư mục cd
├── screenshot.png   # Ảnh chụp thực tế kết quả chạy trên Terminal
└── README.md        # Hướng dẫn chi tiết cách chạy và mô tả các bước
```

---

## 🚀 Các bước thực hiện & Ảnh minh chứng thực tế 100%

### Bước 1: Mở Terminal / PowerShell và chuyển vào thư mục bài tập
```powershell
cd "Bài 03/Node js/Bai03/bt3"
```
📸 **Ảnh chụp màn hình thực tế lệnh `cd`:**

![Bước 1: Lệnh chuyển thư mục cd](./step1_cd.png)

---

### Bước 2: Chạy chương trình thao tác với file
```powershell
node bai03.js
```
*(Hoặc dùng lệnh `npm start`)*

📸 **Ảnh chụp màn hình thực tế khi chạy lệnh và hoàn thành 4 bước:**

![Bước 2: Chạy lệnh node bai03.js và kết quả](./step2_run.png)

---


