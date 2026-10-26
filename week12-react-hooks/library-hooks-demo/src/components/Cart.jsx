export default function Cart({ items, onReturn, onReturnAll }) {
    return (
        <div className="cart">
            <h2>Checked out ({items.length})</h2>
            {items.length === 0 && <p>Nothing checked out yet.</p>}
            <ul>
                {items.map((book) => (
                    <li key={book.id}>
                        {book.title}
                        <button type="button" onClick={() => onReturn(book.id)}>
                            Return
                        </button>
                    </li>
                ))}
            </ul>
            {items.length > 0 && (
                <button type="button" onClick={onReturnAll}>
                    Return all
                </button>
            )}
        </div>
    );
}
