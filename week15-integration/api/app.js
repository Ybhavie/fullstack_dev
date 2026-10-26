// A small Express API for the React frontend in ../client to call.
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

const books = [
    { id: 1, title: 'Clean Code', author: 'Robert Martin' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'David Thomas' },
    { id: 3, title: 'Refactoring', author: 'Martin Fowler' },
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/books', express.json(), (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'title and author are required' });
    }

    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
