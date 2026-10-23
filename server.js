const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync('style.css'));
    }else if (req.url === '/script.js') {
        res.end(fs.readFileSync('script.js'));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('index.html'));
    }
});

server.listen(process.env.PORT || 3000);
