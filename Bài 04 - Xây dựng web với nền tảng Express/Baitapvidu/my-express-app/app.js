const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware body-parser xử lý dữ liệu POST từ form HTML
app.use(bodyParser.urlencoded({ extended: true }));

// Phục vụ tệp tĩnh (CSS) từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình template engine Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Đăng ký controller cho tiền tố /calculator
const calculatorController = require('./controllers/calculatorController');
app.use('/calculator', calculatorController);

// Điều hướng trang gốc sang /calculator
app.get('/', (req, res) => {
  res.redirect('/calculator');
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Something broke!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
