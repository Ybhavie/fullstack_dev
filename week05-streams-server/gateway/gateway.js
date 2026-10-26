// A simple gateway: a server that forwards every request to the backend
// server and relays its response back to the client.
const http = require('http');

const BACKEND_HOST = 'localhost';
const BACKEND_PORT = 4000;

const gateway = http.createServer((clientReq, clientRes) => {
    console.log(`Gateway forwarding: ${clientReq.method} ${clientReq.url}`);

    const proxyReq = http.request(
        {
            host: BACKEND_HOST,
            port: BACKEND_PORT,
            path: clientReq.url,
            method: clientReq.method,
            headers: clientReq.headers,
        },
        (backendRes) => {
            clientRes.writeHead(backendRes.statusCode, backendRes.headers);
            backendRes.pipe(clientRes);
        }
    );

    clientReq.pipe(proxyReq);

    proxyReq.on('error', (err) => {
        clientRes.writeHead(502, { 'Content-Type': 'text/plain' });
        clientRes.end('Gateway error: backend not reachable');
    });
});

gateway.listen(3000, () => {
    console.log('Gateway running at http://localhost:3000');
    console.log('Start backend.js first, on port 4000.');
});
