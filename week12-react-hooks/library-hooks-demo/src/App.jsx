import { useCallback, useEffect, useReducer, useState } from 'react';
import { books } from './data/books';
import { cartReducer, initialCartState } from './reducer/cartReducer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import SearchBox from './components/SearchBox';
import BookList from './components/BookList';
import Cart from './components/Cart';

function LibraryApp() {
    const [search, setSearch] = useState('');

    // useReducer: the cart has a few related actions (check out, return,
    // return all), which fits a reducer better than separate useState calls.
    const [cart, dispatch] = useReducer(cartReducer, initialCartState);

    const { theme, toggleTheme } = useTheme();

    // useEffect: keep the browser tab title in sync with the cart size.
    useEffect(() => {
        document.title = `Library (${cart.items.length} checked out)`;
    }, [cart.items.length]);

    // useCallback: BookList/BookRow receive the same function reference
    // across re-renders, instead of a new one every time.
    const handleCheckOut = useCallback((book) => {
        dispatch({ type: 'CHECK_OUT', book });
    }, []);

    const handleReturn = useCallback((bookId) => {
        dispatch({ type: 'RETURN', bookId });
    }, []);

    const handleReturnAll = useCallback(() => {
        dispatch({ type: 'RETURN_ALL' });
    }, []);

    return (
        <main className={`app theme-${theme}`}>
            <h1>Library</h1>
            <button type="button" onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </button>

            <SearchBox onSearch={setSearch} />

            <div className="layout">
                <BookList
                    books={books}
                    search={search}
                    cartItems={cart.items}
                    onCheckOut={handleCheckOut}
                />
                <Cart items={cart.items} onReturn={handleReturn} onReturnAll={handleReturnAll} />
            </div>
        </main>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <LibraryApp />
        </ThemeProvider>
    );
}
