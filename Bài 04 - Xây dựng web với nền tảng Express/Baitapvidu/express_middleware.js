const express = require('express');
const app = express();

// Middleware ghi log
app.use((req, res, next) => {
  console.log(`Yêu cầu đến địa chỉ: ${req.url}`);
  next(); // Chuyển quyền điều khiển cho Middleware tiếp theo hoặc route chính
});

// Route chính
app.get('/', (req, res) => {
  res.send('Chào mừng đến với ứng dụng Express!');
});

// Khởi động server và lắng nghe yêu cầu tại cổng 3000
app.listen(3000, () => {
  console.log('Server đang chạy tại cổng 3000');
});
