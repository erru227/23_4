const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync('style.css'));
    } else if (req.url === '/script.js') {
        res.end(fs.readFileSync('script.js'));
    } else if (req.url.startsWith('/mkdir/')) {
        const name = req.url.split('/')[2];
        fs.mkdir(name, (error) => {
            res.end(error ? "Error: " + error.message : "Folder " + name + " made");
        });
    } else if (req.url.startsWith('/mkfldr/')) {
        const name = req.url.split('/')[2];
        fs.writeFileSync(name, "", (error) => {
            res.end(error ? "Error: " + error.message : "Folder " + name + " made");
        });
    }else if (req.url === '/files') {
        fs.access('.', (error) => {
            if (error) {
                res.end("Cannot access directory");
            } else {
                res.end(fs.readdirSync('.', { recursive: true }).join("\n"));
            }
            });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('index.html'));
    }
});

server.listen(process.env.PORT || 3000);
