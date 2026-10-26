import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:4000/api/books';

export default function App() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(setBooks)
            .catch(() => setError('Could not reach the API. Is it running on port 4000?'));
    }, []);

    const handleAddBook = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, author }),
            });
            const newBook = await res.json();
            setBooks((current) => [...current, newBook]);
            setTitle('');
            setAuthor('');
        } catch {
            setError('Could not add the book.');
        }
    };

    return (
        <div className="app">
            <h1>Book Catalog</h1>
            {error && <p className="error">{error}</p>}

            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} - {book.author}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleAddBook}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    required
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}
