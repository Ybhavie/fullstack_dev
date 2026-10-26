// A small backend server. The gateway forwards requests to this.
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Backend received: ${req.method} ${req.url}`);
});

server.listen(4000, () => {
    console.log('Backend running at http://localhost:4000');
});
