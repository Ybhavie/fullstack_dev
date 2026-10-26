// Accessing request headers in Express.
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Visit /headers to see the request headers for this request.');
});

app.get('/headers', (req, res) => {
    console.log(req.headers);
    res.json({
        userAgent: req.get('User-Agent'),
        host: req.get('Host'),
        allHeaders: req.headers,
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
