import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const PORT = process.env.PORT || 6006;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.ts': 'text/javascript; charset=utf-8',
  '.tsx': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/preview-showcase.html';
  }

  let filePath = path.join(rootDir, reqUrl);

  // Security check: stay within rootDir
  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // If directory, check for index.html or preview-showcase.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    if (fs.existsSync(path.join(filePath, 'preview-showcase.html'))) {
      filePath = path.join(filePath, 'preview-showcase.html');
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback for SPA routing to preview-showcase.html
      const fallbackPath = path.join(rootDir, 'preview-showcase.html');
      if (fs.existsSync(fallbackPath)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fs.readFileSync(fallbackPath));
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 Not Found: ${req.url}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 UEDP-5 Design System & Storybook Dev Server Running!`);
  console.log(`📡 Local URL: http://localhost:${PORT}`);
  console.log(`📡 Network:   http://127.0.0.1:${PORT}`);
  console.log(`📁 Serving:   ${rootDir}`);
  console.log(`🎨 Showcase:  http://localhost:${PORT}/preview-showcase.html`);
  console.log(`======================================================\n`);
});
