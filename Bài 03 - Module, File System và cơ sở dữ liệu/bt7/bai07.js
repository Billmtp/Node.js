/**
 * BÀI 03 - BÀI TẬP 07 (bt7): WEB SERVER VỚI MODULE HTTP VÀ ĐỐI TƯỢNG URL
 * 
 * Yêu cầu:
 * - Sử dụng module http và đối tượng URL.
 * - Tạo Web Server tại cổng 3001.
 * - Khi truy cập /hello?name=Minh, hiển thị "Xin chào Minh".
 * - Khi truy cập /sum?a=10&b=20, hiển thị "Tổng = 30".
 * - Trả về thông báo lỗi nếu thiếu tham số hoặc giá trị không hợp lệ.
 * 
 * Lệnh chạy: node bai07.js
 * 
 * Sinh viên thực hiện: Lê Trần Thạnh
 * Mã sinh viên (MSSV): CD-CNTT18B27
 * Lớp: CĐ-CNTT18B
 * Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang
 */

const http = require('http');

const PORT = 3001;
const HOST = 'localhost';

function renderHtml(title, badge, mainContent, subContent, isError = false) {
    const themeColor = isError ? '#ef4444' : '#38bdf8';
    const badgeBg = isError ? 'rgba(239, 68, 68, 0.2)' : 'rgba(56, 189, 248, 0.2)';
    const badgeBorder = isError ? 'rgba(239, 68, 68, 0.4)' : 'rgba(56, 189, 248, 0.4)';

    return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e1e38 100%);
            color: #f8fafc;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .card {
            background: rgba(30, 41, 59, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            border-radius: 20px;
            padding: 40px;
            max-width: 650px;
            width: 100%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            text-align: center;
        }
        .badge {
            display: inline-block;
            background: ${badgeBg};
            color: ${themeColor};
            border: 1px solid ${badgeBorder};
            padding: 6px 16px;
            border-radius: 9999px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 20px;
        }
        h1 {
            font-size: 2.2rem;
            margin-bottom: 16px;
            color: #ffffff;
            letter-spacing: -0.5px;
        }
        .main-content {
            font-size: 2rem;
            font-weight: 700;
            color: ${themeColor};
            margin: 20px 0;
            padding: 16px;
            background: rgba(15, 23, 42, 0.6);
            border-radius: 12px;
            border-left: 5px solid ${themeColor};
        }
        .sub-content {
            font-size: 1.05rem;
            color: #94a3b8;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        .nav-links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav-links a {
            color: #38bdf8;
            text-decoration: none;
            background: rgba(56, 189, 248, 0.1);
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.9rem;
            transition: all 0.2s;
        }
        .nav-links a:hover {
            background: rgba(56, 189, 248, 0.25);
            color: #ffffff;
        }
        .footer {
            margin-top: 25px;
            font-size: 0.85rem;
            color: #64748b;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="badge">${badge}</div>
        <h1>${title}</h1>
        <div class="main-content">${mainContent}</div>
        <div class="sub-content">${subContent}</div>
        <div class="nav-links">
            <a href="/">🏠 Trang chủ</a>
            <a href="/hello?name=Minh">👋 /hello?name=Minh</a>
            <a href="/sum?a=10&b=20">➕ /sum?a=10&b=20</a>
            <a href="/sum?a=25&b=75">➕ /sum?a=25&b=75</a>
            <a href="/hello">⚠️ Lỗi /hello thiếu name</a>
            <a href="/sum?a=10">⚠️ Lỗi /sum thiếu b</a>
        </div>
        <div class="footer">
            Sinh viên: <strong>Lê Trần Thạnh</strong> (MSSV: CD-CNTT18B27) | Lớp: CĐ-CNTT18B
        </div>
    </div>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
    // Phân tích URL bằng đối tượng URL chuẩn WHATWG của Node.js
    const reqUrl = new URL(req.url, `http://${req.headers.host || `${HOST}:${PORT}`}`);
    const pathname = reqUrl.pathname;
    const params = reqUrl.searchParams;

    console.log(`[${new Date().toLocaleTimeString('vi-VN')}] Yêu cầu: ${req.method} ${req.url}`);

    // Thiết lập Header chung
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 1. Tuyến đường /hello: Hiển thị lời chào theo tham số name
    if (pathname === '/hello') {
        const name = params.get('name');

        if (!name || name.trim() === '') {
            res.writeHead(400);
            return res.end(renderHtml(
                'Lỗi Tham Số',
                'HTTP 400 - Bad Request',
                'Lỗi: Thiếu tham số "name"!',
                'Vui lòng cung cấp tham số tên hợp lệ trên URL. Ví dụ: <code>/hello?name=Minh</code>',
                true
            ));
        }

        res.writeHead(200);
        return res.end(renderHtml(
            'Lời Chào Sinh Viên',
            'HTTP 200 - OK',
            `Xin chào ${name}`,
            `Chào mừng bạn đến với Web Server Node.js (cổng ${PORT}). Tham số nhận được: name = "${name}".`,
            false
        ));
    }

    // 2. Tuyến đường /sum: Tính tổng 2 số a và b
    if (pathname === '/sum') {
        if (!params.has('a') || !params.has('b')) {
            res.writeHead(400);
            return res.end(renderHtml(
                'Lỗi Thiếu Tham Số',
                'HTTP 400 - Bad Request',
                'Lỗi: Thiếu tham số "a" hoặc "b"!',
                'Phép tính cộng yêu cầu đủ hai số. Ví dụ: <code>/sum?a=10&b=20</code>',
                true
            ));
        }

        const aStr = params.get('a').trim();
        const bStr = params.get('b').trim();
        const a = Number(aStr);
        const b = Number(bStr);

        if (isNaN(a) || isNaN(b) || aStr === '' || bStr === '') {
            res.writeHead(400);
            return res.end(renderHtml(
                'Lỗi Giá Trị Không Hợp Lệ',
                'HTTP 400 - Bad Request',
                'Lỗi: Tham số "a" và "b" phải là số hợp lệ!',
                `Giá trị nhận được: a = "${aStr}", b = "${bStr}". Vui lòng chỉ truyền số thực hoặc số nguyên.`,
                true
            ));
        }

        const sum = a + b;
        res.writeHead(200);
        return res.end(renderHtml(
            'Kết Quả Tính Tổng',
            'HTTP 200 - OK',
            `Tổng = ${sum}`,
            `Phép tính: ${a} + ${b} = ${sum}`,
            false
        ));
    }

    // 3. Tuyến đường Trang chủ (/)
    if (pathname === '/' || pathname === '/index.html') {
        res.writeHead(200);
        return res.end(renderHtml(
            'Web Server Module HTTP & URL',
            'HTTP 200 - Running on Port 3001',
            'Máy chủ Node.js sẵn sàng!',
            'Chọn một trong các liên kết phía dưới để kiểm tra chức năng <strong>/hello</strong> và <strong>/sum</strong>.',
            false
        ));
    }

    // 4. Tuyến đường không tồn tại (404)
    res.writeHead(404);
    return res.end(renderHtml(
        'Không Tìm Thấy Trang',
        'HTTP 404 - Not Found',
        '404 - Đường dẫn không tồn tại!',
        `Đường dẫn <code>${pathname}</code> không được hỗ trợ trên máy chủ này.`,
        true
    ));
});

server.listen(PORT, HOST, () => {
    console.log('======================================================================');
    console.log('     BÀI 03 - BÀI TẬP 07 (bt7): WEB SERVER VỚI MODULE HTTP & URL      ');
    console.log('======================================================================');
    console.log('👤 Sinh viên thực hiện : Lê Trần Thạnh (MSSV: CD-CNTT18B27)');
    console.log('🏫 Lớp                 : CĐ-CNTT18B');
    console.log(`🚀 Máy chủ đang lắng nghe tại: http://${HOST}:${PORT}`);
    console.log('👉 Các đường dẫn thử nghiệm:');
    console.log(`   • Lời chào        : http://${HOST}:${PORT}/hello?name=Minh`);
    console.log(`   • Tính tổng       : http://${HOST}:${PORT}/sum?a=10&b=20`);
    console.log(`   • Kiểm tra lỗi    : http://${HOST}:${PORT}/hello  hoặc  http://${HOST}:${PORT}/sum?a=abc&b=20`);
    console.log('======================================================================');
});
