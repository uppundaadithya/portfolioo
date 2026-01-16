const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            let contentType = 'text/html';
            if (filePath.endsWith('.css')) {
                contentType = 'text/css';
            } else if (filePath.endsWith('.js')) {
                contentType = 'application/javascript';
            } else if (filePath.endsWith('.jpeg') || filePath.endsWith('.jpg')) {
                contentType = 'image/jpeg';
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    }           );
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 