const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let url = req.url;

    // Remove query string
    url = url.split('?')[0];

    // Remove trailing slash
    if (url !== '/' && url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    // Handle clean URLs
    let filePath = '';

    // Redirect /index.html to /
    if (url === '/index.html') {
        res.writeHead(301, { 'Location': '/' });
        res.end();
        return;
    }

    // Redirect /index-ar.html to /ar
    if (url === '/index-ar.html') {
        res.writeHead(301, { 'Location': '/ar' });
        res.end();
        return;
    }

    // Handle Arabic routes
    if (url === '/ar') {
        filePath = path.join(__dirname, 'index-ar.html');
    }
    // Handle root
    else if (url === '/') {
        filePath = path.join(__dirname, 'index.html');
    }
    // Handle assets
    else if (url.startsWith('/assets/')) {
        filePath = path.join(__dirname, url);
    }
    // All other routes go to index.html
    else {
        filePath = path.join(__dirname, 'index.html');
    }

    // Get file extension
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found - serve index.html
                fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Error loading index.html');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end('Server Error: ' + err.code);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
