/**
 * BÀI 04 - BT01: XÂY DỰNG WEBSITE GIỚI THIỆU CÁ NHÂN VỚI EXPRESS
 *
 * Yêu cầu:
 * - Khởi tạo dự án Node.js và cài đặt Express.
 * - Xây dựng các Route: /, /about, /skills, /hobbies, /contact.
 * - Thiết kế giao diện HTML/CSS đơn giản, có menu điều hướng.
 * - Xử lý đường dẫn không tồn tại (HTTP 404).
 *
 * Sinh viên thực hiện: Lê Trần Thạnh
 * MSSV: CD-CNTT18B27 | Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Phục vụ tập tin tĩnh (CSS) từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Ghi log các request đến server
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString('vi-VN')}] ${req.method} ${req.url}`);
  next();
});

// Hàm tạo bố cục HTML chung kèm menu điều hướng
function renderPage(title, activePath, contentHtml) {
  const navItems = [
    { href: '/', label: 'Trang chủ' },
    { href: '/about', label: 'Giới thiệu' },
    { href: '/skills', label: 'Kỹ năng' },
    { href: '/hobbies', label: 'Sở thích' },
    { href: '/contact', label: 'Liên hệ' }
  ];

  const navLinks = navItems
    .map(item => `<a href="${item.href}" class="${activePath === item.href ? 'active' : ''}">${item.label}</a>`)
    .join('');

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Lê Trần Thạnh</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <header>
    <div class="nav-container">
      <a class="brand" href="/">Lê Trần Thạnh · Portfolio</a>
      <nav>${navLinks}</nav>
    </div>
  </header>
  <main>
    <section class="card">
      ${contentHtml}
    </section>
  </main>
  <footer>
    © 2026 Lê Trần Thạnh (MSSV: CD-CNTT18B27) · Lớp CĐ-CNTT18B · Express Framework
  </footer>
</body>
</html>`;
}

// 1. Route Trang chủ (/)
app.get('/', (req, res) => {
  const content = `
    <span class="badge">Trang chủ · Express Framework</span>
    <h1>Xin chào! Mình là Lê Trần Thạnh</h1>
    <p>Chào mừng bạn đến với website giới thiệu cá nhân được xây dựng bằng <strong>Node.js</strong> và <strong>Express Framework</strong> trong học phần Phát triển ứng dụng hướng máy chủ.</p>
    <div class="grid">
      <div class="item">
        <h3>Thông tin sinh viên</h3>
        <p>MSSV: CD-CNTT18B27 · Lớp: CĐ-CNTT18B · Trường CĐ Kỹ thuật Công nghệ Nha Trang.</p>
      </div>
      <div class="item">
        <h3>Mục tiêu nghề nghiệp</h3>
        <p>Trở thành lập trình viên Full-stack Web & Mobile với Node.js, Express, MongoDB và React Native.</p>
      </div>
    </div>
    <a class="btn" href="/about">Xem thêm về bản thân →</a>
  `;
  res.send(renderPage('Trang chủ', '/', content));
});

// 2. Route Giới thiệu (/about)
app.get('/about', (req, res) => {
  const content = `
    <span class="badge">Giới thiệu bản thân</span>
    <h1>Về Lê Trần Thạnh</h1>
    <p>Mình là sinh viên ngành Công nghệ Thông tin, yêu thích tìm hiểu về lập trình backend, thiết kế API và xây dựng các ứng dụng web thực tế.</p>
    <ul class="info-list">
      <li><strong>Họ và tên:</strong> <span>Lê Trần Thạnh</span></li>
      <li><strong>Mã sinh viên:</strong> <span>CD-CNTT18B27</span></li>
      <li><strong>Lớp học:</strong> <span>CĐ-CNTT18B</span></li>
      <li><strong>Đơn vị đào tạo:</strong> <span>Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang</span></li>
      <li><strong>Chuyên ngành:</strong> <span>Công nghệ Thông tin</span></li>
    </ul>
  `;
  res.send(renderPage('Giới thiệu', '/about', content));
});

// 3. Route Kỹ năng (/skills)
app.get('/skills', (req, res) => {
  const content = `
    <span class="badge">Kỹ năng chuyên môn</span>
    <h1>Kỹ năng lập trình</h1>
    <p>Một số công nghệ và công cụ mình đang học tập và thực hành:</p>
    <div class="grid">
      <div class="item">
        <h3>Backend (Node.js & Express)</h3>
        <p>Xây dựng Web Server, định tuyến (Routing), Middleware, RESTful API và thao tác File System.</p>
      </div>
      <div class="item">
        <h3>Cơ sở dữ liệu (MongoDB)</h3>
        <p>Thao tác CRUD, lọc truy vấn ($gte, $lt), sắp xếp và liên kết bảng bằng Aggregate ($lookup).</p>
      </div>
      <div class="item">
        <h3>Frontend & Mobile</h3>
        <p>HTML5, CSS3, JavaScript ES6+, React Native & Expo.</p>
      </div>
      <div class="item">
        <h3>Công cụ phát triển</h3>
        <p>Git, GitHub, VS Code, PowerShell, Postman.</p>
      </div>
    </div>
  `;
  res.send(renderPage('Kỹ năng', '/skills', content));
});

// 4. Route Sở thích (/hobbies)
app.get('/hobbies', (req, res) => {
  const content = `
    <span class="badge">Sở thích cá nhân</span>
    <h1>Sở thích & Hoạt động</h1>
    <p>Ngoài giờ học lập trình trên lớp, mình thường dành thời gian cho các sở thích sau:</p>
    <div class="grid">
      <div class="item">
        <h3>🎧 Nghe nhạc</h3>
        <p>Thư giãn với các bản nhạc sôi động và lofi khi viết code.</p>
      </div>
      <div class="item">
        <h3>📚 Đọc truyện & Công nghệ</h3>
        <p>Theo dõi tin tức công nghệ mới và đọc truyện giải trí sau giờ học.</p>
      </div>
      <div class="item">
        <h3>💻 Thực hành dự án nhỏ</h3>
        <p>Tự xây dựng các ứng dụng web/mobile nhỏ để rèn luyện tư duy lập trình.</p>
      </div>
    </div>
  `;
  res.send(renderPage('Sở thích', '/hobbies', content));
});

// 5. Route Liên hệ (/contact)
app.get('/contact', (req, res) => {
  const content = `
    <span class="badge">Thông tin liên hệ</span>
    <h1>Liên hệ với mình</h1>
    <p>Bạn có thể kết nối hoặc xem các bài thực hành của mình qua các kênh sau:</p>
    <ul class="info-list">
      <li><strong>GitHub:</strong> <span><a href="https://github.com/Billmtp/Node.js" target="_blank">https://github.com/Billmtp/Node.js</a></span></li>
      <li><strong>Trường học:</strong> <span>Cao đẳng Kỹ thuật Công nghệ Nha Trang</span></li>
      <li><strong>Địa chỉ:</strong> <span>Nha Trang, Khánh Hòa</span></li>
    </ul>
  `;
  res.send(renderPage('Liên hệ', '/contact', content));
});

// 6. Middleware xử lý lỗi 404 (đường dẫn không tồn tại)
app.use((req, res) => {
  const content = `
    <span class="badge badge-error">HTTP 404 · Not Found</span>
    <h1>404 — Không tìm thấy trang</h1>
    <p>Đường dẫn <code>${req.originalUrl}</code> không tồn tại trên hệ thống. Vui lòng kiểm tra lại địa chỉ hoặc quay về trang chủ.</p>
    <a class="btn" href="/">← Quay về Trang chủ</a>
  `;
  res.status(404).send(renderPage('404 Not Found', '', content));
});

app.listen(PORT, () => {
  console.log('======================================================================');
  console.log('   BÀI 04 - BT01: WEBSITE GIỚI THIỆU CÁ NHÂN (EXPRESS FRAMEWORK)     ');
  console.log('======================================================================');
  console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
  console.log('🏫 Lớp                 : CĐ-CNTT18B');
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
  console.log('👉 Các Route hỗ trợ    : / , /about , /skills , /hobbies , /contact');
  console.log('======================================================================');
});
