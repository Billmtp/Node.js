# BÀI TẬP 03 - BT01: LỌC DANH SÁCH SINH VIÊN BẰNG CLASS & ARROW FUNCTION

## 📌 Yêu cầu đề bài
> **Yêu cầu:** Tạo tập tin `bai01.js` thực hiện:
> - Khai báo danh sách 5 sinh viên, mỗi sinh viên gồm mã, họ tên, tuổi và điểm.
> - Sử dụng class, constructor để biểu diễn sinh viên.
> - Sử dụng hàm mũi tên (arrow function) để lọc sinh viên có điểm từ 5 trở lên.
> - Hiển thị danh sách sinh viên đạt yêu cầu bằng `console.log()`.
> - Chạy: `node bai01.js`
> - Kết quả: Terminal hiển thị đúng danh sách sinh viên đạt yêu cầu.

---

## 👨‍🎓 Thông tin sinh viên
* **Họ và tên:** Lê Trần Thạnh
* **Mã sinh viên (MSSV):** CD-CNTT18B27
* **Lớp:** CĐ-CNTT18B
* **Trường:** Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang
* **Repository GitHub:** [https://github.com/Billmtp/Node.js](https://github.com/Billmtp/Node.js)
* **Đường dẫn thư mục:** `Bài 03/Node js/Bai03/bt1`

---

## 🛠️ Cấu trúc thư mục
```
Bài 03/Node js/Bai03/bt1/
├── bai01.js         # Mã nguồn thực thi quản lý và lọc sinh viên
├── package.json     # Cấu hình dự án và script npm
├── step1_cd.png     # Ảnh chụp thực tế lệnh di chuyển thư mục cd
├── step2_run.png    # Ảnh chụp thực tế lệnh chạy node bai01.js và kết quả
└── README.md        # Hướng dẫn chi tiết, mô tả mã nguồn và kết quả
```

---

## 🚀 Các bước thực hiện & Ảnh minh chứng thực tế 100%

### Bước 1: Mở Terminal / PowerShell và chuyển vào thư mục bài tập
```powershell
cd "Bài 03/Node js/Bai03/bt1"
```
📸 **Ảnh chụp màn hình thực tế lệnh `cd`:**

![Bước 1: Lệnh chuyển thư mục cd](./step1_cd.png)

---

### Bước 2: Chạy chương trình và hiển thị kết quả
```powershell
node bai01.js
```
*(Hoặc dùng lệnh `npm start`)*

📸 **Ảnh chụp màn hình thực tế khi chạy lệnh và kết quả Terminal:**

![Bước 2: Chạy lệnh node bai01.js và kết quả](./step2_run.png)

---

## 📊 Kết quả thực thi chi tiết trong Terminal
```text
======================================================================
                 BÀI 03 - BÀI TẬP 01 (bt1): QUẢN LÝ SINH VIÊN        
======================================================================
👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)
🏫 Lớp                 : CĐ-CNTT18B
----------------------------------------------------------------------

📋 DANH SÁCH TOÀN BỘ 5 SINH VIÊN BAN ĐẦU:
  1. [CD-CNTT18B27] Lê Trần Thạnh - 20 tuổi | Điểm: 8.5
  2. [SV002] Nguyễn Thị Thu Hà - 20 tuổi | Điểm: 4.5
  3. [SV003] Trần Hoàng Long - 21 tuổi | Điểm: 7
  4. [SV004] Phạm Minh Tuấn - 20 tuổi | Điểm: 3.8
  5. [SV005] Võ Thảo My - 19 tuổi | Điểm: 9.2

🎯 DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU (ĐIỂM >= 5):
----------------------------------------------------------------------
  1. Mã: CD-CNTT18B27   | Họ tên: Lê Trần Thạnh        | Tuổi: 20 | Điểm: 8.5
  2. Mã: SV003          | Họ tên: Trần Hoàng Long      | Tuổi: 21 | Điểm: 7
  3. Mã: SV005          | Họ tên: Võ Thảo My           | Tuổi: 19 | Điểm: 9.2
----------------------------------------------------------------------
=> Tổng số sinh viên đạt yêu cầu: 3/5 sinh viên.
======================================================================
```

---

## 🔍 Giải thích chi tiết mã nguồn (`bai01.js`)
1. **Định nghĩa Class & Constructor:**
   ```javascript
   class SinhVien {
       constructor(ma, hoTen, tuoi, diem) {
           this.ma = ma;
           this.hoTen = hoTen;
           this.tuoi = tuoi;
           this.diem = diem;
       }
   }
   ```
2. **Khai báo danh sách 5 sinh viên:** Mảng gồm 5 đối tượng khởi tạo từ class `SinhVien`.
3. **Lọc bằng Arrow Function:**
   ```javascript
   const sinhVienDatYeuCau = danhSachSinhVien.filter(sv => sv.diem >= 5);
   ```
4. **Hiển thị danh sách đạt yêu cầu:** Dùng `console.log()` duyệt in ra màn hình.
