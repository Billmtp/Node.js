# KHO LƯU TRỮ BÀI TẬP NODE.JS (NODE.JS REPOSITORY)

Sinh viên: **Lê Trần Thạnh**  
Mã sinh viên: **CD-CNTT18B27**  
Lớp: **CĐ-CNTT18B**  
Trường: **Cao đẳng Kỹ thuật Công nghệ Nha Trang**  
GitHub: [https://github.com/Billmtp/Node.js](https://github.com/Billmtp/Node.js)

---

## 📚 Danh sách các bài tập

### [Bài 01: Cài đặt Node.js LTS & Chương trình hello.js](./Bài%2001/)
* **Yêu cầu:** Cài Node.js LTS; chạy `node -v` và `npm -v`; tạo một file `hello.js` và mô tả kết quả.
* **Mã nguồn:** [`Bài 01/hello.js`](./Bài%2001/hello.js)
* **Tài liệu & Minh chứng:** [`Bài 01/README.md`](./Bài%2001/README.md)

---

### [Bài 02: Lập trình HTTP Server với Node.js](./Bài%2002/)
* **[Bài 02 - Phần 01](./Bài%2002/01/):** Tạo HTTP server bằng Node.js thuần; truy cập `localhost:3000` và trả về trang HTML chứa tên sinh viên.
* **[Bài 02 - Phần 02](./Bài%2002/02/):** Tạo ứng dụng Node.js sử dụng module `http`, chạy tại cổng 3000, trả về trang HTML có họ tên và mã sinh viên.

---

### [Bài 03: ES6, HTTP Server, Module FS & MongoDB](./Bài%2003/)
* **Cấu trúc:** `Bài 03/Node js/Bai03/bt1, bt2, bt3, bt4, bt5`
* **[bt1](./Bài%2003/Node%20js/Bai03/bt1/):** Quản lý đối tượng SinhVien bằng Class/Constructor, lọc danh sách sinh viên có điểm >= 5 bằng Arrow Function (`bai01.js`).
* **[bt2](./Bài%2003/Node%20js/Bai03/bt2/):** Web Server tại cổng 3000 với module `http`, định tuyến `/`, `/about` và xử lý 404 (`bai02.js`).
* **[bt3](./Bài%2003/Node%20js/Bai03/bt3/):** Thao tác tập tin với module `fs`: tạo `thongtin.txt`, đọc dữ liệu, nối lớp bằng `appendFile()` (`bai03.js`).
* **[bt4](./Bài%2003/Node%20js/Bai03/bt4/):** Kết nối MongoDB database `qlsinhvien`, collection `students`, thêm sinh viên bằng `insertMany()` và hiển thị bằng `find()` (`bai04.js`).
* **[bt5](./Bài%2003/Node%20js/Bai03/bt5/):** Truy vấn lọc sinh viên điểm >= 7 bằng `$gte`, sắp xếp giảm dần với `sort()`, cập nhật điểm bằng `updateOne()` và `$set` (`bai05.js`).
