/**
 * BÀI 03 - BÀI TẬP 02 (bt2)
 * 
 * Yêu cầu: Tạo tập tin bai02.js thực hiện:
 * - Sử dụng module http tạo Web Server tại cổng 3000.
 * - Khi truy cập /, hiển thị lời chào và mã sinh viên.
 * - Khi truy cập /about, hiển thị thông tin giới thiệu bản thân.
 * - Khi truy cập đường dẫn không tồn tại, trả về mã trạng thái HTTP 404.
 * 
 * Chạy lệnh: node bai02.js
 * Kết quả: Trình duyệt hiển thị đúng nội dung tại http://localhost:3000 và http://localhost:3000/about.
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const http = require('http');

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
    // Phân tích pathname từ URL yêu cầu
    const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = reqUrl.pathname;

    console.log(`[${new Date().toLocaleTimeString('vi-VN')}] Yêu cầu đến đường dẫn: ${pathname}`);

    // 1. Khi truy cập trang chủ (/ hoặc /index.html): Hiển thị lời chào và mã sinh viên
    if (pathname === '/' || pathname === '/index.html') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Powered-By': 'Node.js HTTP Module'
        });

        res.end(`<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài 03 - Bt02 | Trang Chủ</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .card {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px);
        }
        h1 { color: #38bdf8; margin-bottom: 12px; font-size: 28px; }
        .greeting { font-size: 18px; color: #cbd5e1; margin-bottom: 24px; line-height: 1.6; }
        .mssv-badge {
            display: inline-block;
            background: rgba(56, 189, 248, 0.15);
            border: 1px solid #38bdf8;
            color: #38bdf8;
            padding: 12px 24px;
            border-radius: 9999px;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 24px;
        }
        .nav-links {
            margin-top: 30px;
            display: flex;
            gap: 12px;
            justify-content: center;
        }
        .btn {
            background: #2563eb;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.2s;
        }
        .btn:hover { background: #1d4ed8; transform: translateY(-2px); }
        .footer { margin-top: 24px; font-size: 13px; color: #64748b; }
    </style>
</head>
<body>
    <div class="card">
        <h1>👋 Xin chào quý thầy cô và các bạn!</h1>
        <p class="greeting">Chào mừng bạn đã truy cập vào máy chủ HTTP Node.js (Bài 03 - Bt02)</p>
        <div>
            <div class="mssv-badge">MÃ SINH VIÊN: CD-CNTT18B27</div>
        </div>
        <p>Họ và tên sinh viên: <strong>Lê Trần Thạnh</strong></p>
        <div class="nav-links">
            <a href="/about" class="btn">👉 Xem trang giới thiệu (/about)</a>
            <a href="/test404" class="btn" style="background: #475569;">Kiểm tra trang 404</a>
        </div>
        <div class="footer">Server chạy tại cổng 3000 • Node.js ${process.version}</div>
    </div>
</body>
</html>`);
        return;
    }

    // 2. Khi truy cập /about: Hiển thị thông tin giới thiệu bản thân
    if (pathname === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Powered-By': 'Node.js HTTP Module'
        });

        res.end(`<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài 03 - Bt02 | Giới Thiệu Bản Thân (/about)</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
            color: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .card {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 40px;
            max-width: 650px;
            width: 100%;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px);
        }
        .header { text-align: center; margin-bottom: 24px; }
        .avatar {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #6366f1, #38bdf8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            margin: 0 auto 16px;
        }
        h1 { color: #818cf8; margin: 0 0 8px 0; font-size: 26px; }
        .subtitle { color: #94a3b8; font-size: 14px; }
        .info-list {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            padding: 16px 20px;
            margin-bottom: 20px;
        }
        .info-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            font-size: 15px;
        }
        .info-item:last-child { border-bottom: none; }
        .label { color: #94a3b8; font-weight: 500; }
        .value { color: #ffffff; font-weight: 600; text-align: right; }
        .bio {
            background: rgba(99, 102, 241, 0.1);
            border-left: 4px solid #818cf8;
            padding: 14px 18px;
            border-radius: 0 10px 10px 0;
            line-height: 1.6;
            font-size: 14px;
            color: #e2e8f0;
            margin-bottom: 24px;
        }
        .btn-back {
            display: inline-block;
            background: #4f46e5;
            color: white;
            text-decoration: none;
            padding: 10px 24px;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.2s;
            text-align: center;
        }
        .btn-back:hover { background: #4338ca; }
        .center { text-align: center; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <div class="avatar">👨‍💻</div>
            <h1>GIỚI THIỆU BẢN THÂN</h1>
            <div class="subtitle">Đường dẫn: /about • Bài tập 02 (bt2)</div>
        </div>

        <div class="info-list">
            <div class="info-item">
                <span class="label">👤 Họ và tên:</span>
                <span class="value">Lê Trần Thạnh</span>
            </div>
            <div class="info-item">
                <span class="label">🆔 Mã sinh viên (MSSV):</span>
                <span class="value" style="color: #38bdf8;">CD-CNTT18B27</span>
            </div>
            <div class="info-item">
                <span class="label">🏫 Lớp:</span>
                <span class="value">CĐ-CNTT18B</span>
            </div>
            <div class="info-item">
                <span class="label">🎓 Ngành đào tạo:</span>
                <span class="value">Công nghệ thông tin (UDPM)</span>
            </div>
            <div class="info-item">
                <span class="label">🏢 Trường:</span>
                <span class="value">Cao đẳng Kỹ thuật Công nghệ Nha Trang</span>
            </div>
        </div>

        <div class="bio">
            <strong>Mục tiêu học tập:</strong> Yêu thích phát triển phần mềm và xây dựng ứng dụng web hiện đại với Node.js, Express và JavaScript ES6+. Mong muốn trở thành một lập trình viên Full-stack chuyên nghiệp.
        </div>

        <div class="center">
            <a href="/" class="btn-back">⬅ Quay lại Trang chủ (/)</a>
        </div>
    </div>
</body>
</html>`);
        return;
    }

    // 3. Khi truy cập đường dẫn không tồn tại: Trả về mã trạng thái HTTP 404
    res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Powered-By': 'Node.js HTTP Module'
    });

    res.end(`<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found - Không tìm thấy trang</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #0b0f19;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        .box {
            padding: 30px;
            max-width: 500px;
        }
        h1 { font-size: 72px; color: #ef4444; margin: 0; }
        p { font-size: 18px; color: #94a3b8; margin: 16px 0 24px; }
        a {
            background: #2563eb;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>404</h1>
        <h2>Đường dẫn không tồn tại</h2>
        <p>Đường dẫn <code>${pathname}</code> bạn yêu cầu không có trên hệ thống máy chủ.</p>
        <a href="/">Quay lại trang chủ</a>
    </div>
</body>
</html>`);
});

server.listen(PORT, HOST, () => {
    console.log(`======================================================================`);
    console.log(`[Bài 03 - bt2] Web Server đang lắng nghe tại cổng ${PORT}`);
    console.log(`👉 Trang chủ       : http://${HOST}:${PORT}/`);
    console.log(`👉 Trang giới thiệu: http://${HOST}:${PORT}/about`);
    console.log(`👉 Sinh viên       : Lê Trần Thạnh - MSSV: CD-CNTT18B27`);
    console.log(`======================================================================`);
});
