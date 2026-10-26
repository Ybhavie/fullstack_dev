// useMemo: only recompute the filtered list when the catalog or the
// search term actually changes, not on every render.
import { useMemo } from 'react';
import BookRow from './BookRow';

export default function BookList({ books, search, cartItems, onCheckOut }) {
    const filteredBooks = useMemo(() => {
        const term = search.trim().toLowerCase();
        if (!term) return books;

        return books.filter(
            (book) =>
                book.title.toLowerCase().includes(term) ||
                book.author.toLowerCase().includes(term)
        );
    }, [books, search]);

    return (
        <ul className="book-list">
            {filteredBooks.map((book) => (
                <BookRow
                    key={book.id}
                    book={book}
                    checkedOut={cartItems.some((item) => item.id === book.id)}
                    onCheckOut={onCheckOut}
                />
            ))}
            {filteredBooks.length === 0 && <li>No books match your search.</li>}
        </ul>
    );
}
