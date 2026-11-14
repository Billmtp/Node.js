# BÀI TẬP 03 - BT02: TẠO WEB SERVER VỚI MODULE HTTP

## 📌 Yêu cầu đề bài
> **Yêu cầu:** Tạo tập tin `bai02.js` thực hiện:
> - Sử dụng module `http` tạo Web Server tại cổng `3000`.
> - Khi truy cập `/`, hiển thị lời chào và mã sinh viên.
> - Khi truy cập `/about`, hiển thị thông tin giới thiệu bản thân.
> - Khi truy cập đường dẫn không tồn tại, trả về mã trạng thái HTTP `404`.
> - Chạy lệnh: `node bai02.js`
> - Kết quả: Trình duyệt hiển thị đúng nội dung tại `http://localhost:3000` và `http://localhost:3000/about`.

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
├── bai02.js         # Mã nguồn Web Server HTTP xử lý định tuyến (/) và (/about)
├── package.json     # Cấu hình dự án và npm script
├── screenshot.png   # Ảnh chụp thực tế kết quả chạy trên máy
└── README.md        # Hướng dẫn chi tiết cách chạy và mô tả các bước
```

---

## 🚀 Hướng dẫn các bước chạy code

### Bước 1: Mở Terminal / PowerShell và chuyển vào thư mục bài tập
```powershell
cd "Bài 03/Node js/Bai03/bt2"
```

### Bước 2: Khởi chạy máy chủ Web
```powershell
node bai02.js
```
*(Hoặc dùng lệnh `npm start`)*

Khi khởi chạy thành công, console sẽ hiển thị:
```text
======================================================================
[Bài 03 - bt2] Web Server đang lắng nghe tại cổng 3000
👉 Trang chủ       : http://localhost:3000/
👉 Trang giới thiệu: http://localhost:3000/about
👉 Sinh viên       : Lê Trần Thạnh - MSSV: CD-CNTT18B27
======================================================================
```

### Bước 3: Mở trình duyệt web để kiểm tra các đường dẫn
1. **Truy cập trang chủ:** Mở trình duyệt vào [`http://localhost:3000`](http://localhost:3000)
   * Hiển thị lời chào và Mã sinh viên: **CD-CNTT18B27**.
2. **Truy cập trang giới thiệu:** Mở [`http://localhost:3000/about`](http://localhost:3000/about)
   * Hiển thị đầy đủ thông tin giới thiệu bản thân: Họ tên Lê Trần Thạnh, MSSV, Lớp CĐ-CNTT18B, Trường CĐ Kỹ thuật Công nghệ Nha Trang.
3. **Kiểm tra đường dẫn không tồn tại (404):** Mở thử [`http://localhost:3000/khong-ton-tai`](http://localhost:3000/khong-ton-tai)
   * Máy chủ trả về mã HTTP 404 Not Found.

---

## 📸 Hình ảnh minh chứng kết quả chạy thực tế

Ảnh chụp màn hình thực tế khi chạy lệnh `node bai02.js` và truy cập trình duyệt:

![Minh chứng kết quả chạy Bài 03 - bt2](./screenshot.png)
