export default function BookRow({ book, checkedOut, onCheckOut }) {
    return (
        <li className="book-row">
            <span>
                <strong>{book.title}</strong> - {book.author}
            </span>
            <button type="button" disabled={checkedOut} onClick={() => onCheckOut(book)}>
                {checkedOut ? 'Checked out' : 'Check out'}
            </button>
        </li>
    );
}
