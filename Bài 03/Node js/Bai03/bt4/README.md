# BÀI TẬP 03 - BT04: KẾT NỐI MONGODB, THÊM VÀ HIỂN THỊ DỮ LIỆU

## 📌 Yêu cầu đề bài
> **Yêu cầu:** Tạo tập tin `bai04.js` thực hiện:
> - Kết nối MongoDB đang chạy trên máy.
> - Sử dụng database `qlsinhvien`, collection `students`.
> - Thêm ít nhất 3 sinh viên bằng `insertMany()`, mỗi sinh viên gồm `masv`, `hoten`, `tuoi`, `diem`.
> - Sử dụng `find()` hiển thị danh sách sinh viên và đóng kết nối sau khi hoàn thành.
> - Chạy: `node bai04.js`
> - Kết quả: Terminal hiển thị các sinh viên đã thêm; dữ liệu được lưu trong MongoDB.

---

## 👨‍🎓 Thông tin sinh viên
* **Họ và tên:** Lê Trần Thạnh
* **Mã sinh viên (MSSV):** CD-CNTT18B27
* **Lớp:** CĐ-CNTT18B
* **Trường:** Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang
* **Repository GitHub:** [https://github.com/Billmtp/Node.js](https://github.com/Billmtp/Node.js)

---

## 🛠️ Cấu trúc thư mục
```
Bài 03/Node js/Bai03/bt4/
├── bai04.js         # Mã nguồn kết nối MongoDB, insertMany() và find()
├── package.json     # Cấu hình dự án và thư viện mongodb
├── step1_cd.png     # Ảnh chụp thực tế lệnh cd
├── step2_run.png    # Ảnh chụp thực tế chạy node bai04.js và kết quả MongoDB
└── README.md        # Hướng dẫn chi tiết cách chạy và minh chứng
```

---

## 🚀 Các bước thực hiện & Minh chứng ảnh chụp thực tế từng bước

### Bước 1: Mở PowerShell và di chuyển vào thư mục bài tập
```powershell
cd "c:\baitap\Bài 03\Node js\Bai03\bt4"
```
![Bước 1: Lệnh chuyển thư mục cd](./step1_cd.png)

---

### Bước 2: Chạy chương trình kết nối và thao tác MongoDB
```powershell
node bai04.js
```
*(Hoặc dùng lệnh `npm start`)*

![Bước 2: Chạy lệnh node bai04.js và kết quả](./step2_run.png)

---

## 🔍 Giải thích các thao tác kỹ thuật
1. **Kết nối:** Dùng `const client = new MongoClient(URI); await client.connect();` kết nối máy chủ MongoDB.
2. **Chọn Database & Collection:** Truy cập database `qlsinhvien` và collection `students`.
3. **Thêm dữ liệu:** Sử dụng `await collection.insertMany(danhSach);` để thêm cùng lúc danh sách 4 sinh viên.
4. **Hiển thị dữ liệu:** Dùng `await collection.find({}).toArray();` lấy dữ liệu đã lưu và in ra Terminal bằng `console.log()`.
5. **Đóng kết nối:** `await client.close();` giải phóng tài nguyên kết nối an toàn.
