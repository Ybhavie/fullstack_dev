// CommonJS modules: require() and module.exports, built-in http module.
const http = require('http');
const fs = require('fs');
const math = require('./mathModule'); // a local module, same folder

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('Add: ' + math.add(5, 3) + '\n');
    res.write('Subtract: ' + math.subtract(5, 3) + '\n');

    // SYNCHRONOUS file read (blocks everything until done)
    const dataSync = fs.readFileSync('data.txt', 'utf8');
    res.write('Sync read: ' + dataSync + '\n');

    // ASYNCHRONOUS file read (non-blocking, uses a callback)
    fs.readFile('data.txt', 'utf8', (err, data) => {
        console.log('Async read: ' + data);
    });

    res.end();
});

server.listen(3000, () => {
    console.log('Server at http://localhost:3000');
});
