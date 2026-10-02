const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

const streamer = fs.createWriteStream('input.txt', { flags: 'a' });

app.get('/add', (req, res) => {
    const { name, roll } = req.query;
    const className = req.query.class;

    streamer.write(`${name}, ${roll}, ${className}\n`);

    const data = fs.readFileSync('input.txt', 'utf8');
    res.send(`Student Added!\n\n${data}`);
});

app.get('/students', (req, res) => {
    const data = fs.readFileSync('input.txt', 'utf8');
    res.send(data);
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:3000');
});