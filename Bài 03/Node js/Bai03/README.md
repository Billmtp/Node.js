# BÀI 03: ES6, HTTP WEB SERVER, MODULE FS & MONGODB TRONG NODE.JS

* **Họ và tên:** Lê Trần Thạnh
* **MSSV:** CD-CNTT18B27
* **Lớp:** CĐ-CNTT18B
* **Trường:** Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang
* **Repository GitHub:** [https://github.com/Billmtp/Node.js](https://github.com/Billmtp/Node.js)

---

## 📂 Danh sách các bài tập con trong Bai03:

### [1. Bài tập 01 (bt1): Lọc sinh viên điểm >= 5 bằng Class & Arrow Function](./bt1/)
* **File:** [`bt1/bai01.js`](./bt1/bai01.js)
* **Yêu cầu:** Khai báo 5 sinh viên với class/constructor, lọc sinh viên đạt điểm >= 5 bằng hàm mũi tên arrow function.
* **Chi tiết & Minh chứng:** Xem tại [`bt1/README.md`](./bt1/README.md)

### [2. Bài tập 02 (bt2): Web Server với Module HTTP](./bt2/)
* **File:** [`bt2/bai02.js`](./bt2/bai02.js)
* **Yêu cầu:** Tạo Web Server tại cổng 3000 bằng module http, hiển thị lời chào + MSSV tại `/`, thông tin giới thiệu bản thân tại `/about`, xử lý mã lỗi 404.
* **Chi tiết & Minh chứng:** Xem tại [`bt2/README.md`](./bt2/README.md)

### [3. Bài tập 03 (bt3): Thao tác tập tin với Module FS](./bt3/)
* **File:** [`bt3/bai03.js`](./bt3/bai03.js)
* **Yêu cầu:** Tạo file `thongtin.txt` ghi Họ tên và MSSV, đọc hiển thị Terminal, ghi nối tên lớp bằng `appendFile()`, đọc lại chứng minh cập nhật.
* **Chi tiết & Minh chứng:** Xem tại [`bt3/README.md`](./bt3/README.md)

### [4. Bài tập 04 (bt4): Kết nối MongoDB, Thêm và Hiển thị Dữ liệu](./bt4/)
* **File:** [`bt4/bai04.js`](./bt4/bai04.js)
* **Yêu cầu:** Kết nối MongoDB database `qlsinhvien`, collection `students`, thêm ít nhất 3 sinh viên bằng `insertMany()`, hiển thị bằng `find()`.
* **Chi tiết & Minh chứng:** Xem tại [`bt4/README.md`](./bt4/README.md)

### [5. Bài tập 05 (bt5): Lọc ($gte), Sắp xếp (sort) và Cập nhật ($set) MongoDB](./bt5/)
* **File:** [`bt5/bai05.js`](./bt5/bai05.js)
* **Yêu cầu:** Lọc sinh viên có `diem >= 7` bằng `$gte`, sắp xếp giảm dần với `sort()`, cập nhật điểm bằng `updateOne()` & `$set`, hiển thị lại kiểm tra.
* **Chi tiết & Minh chứng:** Xem tại [`bt5/README.md`](./bt5/README.md)

### [6. Bài tập 06 (bt6): Module Hóa với module.exports & require()](./bt6/)
* **File:** [`bt6/xulyDiem.js`](./bt6/xulyDiem.js), [`bt6/bai06.js`](./bt6/bai06.js)
* **Yêu cầu:** Xây dựng module `xulyDiem.js` tính điểm trung bình 3 môn và xếp loại (Giỏi, Khá, Trung bình, Yếu), xuất bằng `module.exports`, `bai06.js` require và hiển thị dữ liệu 3 sinh viên.
* **Chi tiết & Minh chứng:** Xem tại [`bt6/README.md`](./bt6/README.md)

### [7. Bài tập 07 (bt7): Web Server với Module HTTP và Đối tượng URL](./bt7/)
* **File:** [`bt7/bai07.js`](./bt7/bai07.js)
* **Yêu cầu:** Tạo Web Server cổng 3001, dùng module `http` và `URL`. Xử lý `/hello?name=Minh` (Xin chào Minh), `/sum?a=10&b=20` (Tổng = 30), thông báo lỗi nếu thiếu hoặc sai tham số.
* **Chi tiết & Minh chứng:** Xem tại [`bt7/README.md`](./bt7/README.md)
