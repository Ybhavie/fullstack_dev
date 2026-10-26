# Week 12 - React hooks

## Notes

A **hook** is a function (always starting with `use`) that lets a
function component use React features like state, side effects, and
context. Hooks must be called at the top level of a component (never
inside `if`/loops/nested functions).

**`useState`** - a single piece of state:

```jsx
const [search, setSearch] = useState('');
```

**`useReducer`** - state that changes through a set of well-defined
actions, useful once a few related updates belong together (instead
of several separate `useState` calls):

```jsx
function cartReducer(state, action) {
    switch (action.type) {
        case 'CHECK_OUT': return { items: [...state.items, action.book] };
        case 'RETURN': return { items: state.items.filter(b => b.id !== action.bookId) };
        default: return state;
    }
}
const [cart, dispatch] = useReducer(cartReducer, { items: [] });
dispatch({ type: 'CHECK_OUT', book });
```

**`useContext`** - reads a value provided higher up the tree, without
passing it down as a prop through every component in between:

```jsx
const ThemeContext = createContext();
// higher up: <ThemeContext.Provider value={theme}>...
const theme = useContext(ThemeContext);
```

**`useRef`** - a mutable value that survives re-renders without
causing one when it changes; commonly used to reach a real DOM node:

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();
```

**`useEffect`** - runs code after render, for anything that reaches
outside React (fetching data, timers, the document title). The
dependency array controls when it re-runs:

```jsx
useEffect(() => {
    document.title = `Cart (${items.length})`;
}, [items.length]);   // re-runs only when items.length changes
```

**`useMemo`** - caches an expensive calculation, so it only reruns
when its dependencies change:

```jsx
const filtered = useMemo(() => books.filter(...), [books, search]);
```

**`useCallback`** - caches a *function* itself (not its result), so
child components don't receive a new function reference on every
render:

```jsx
const handleCheckOut = useCallback((book) => dispatch({ type: 'CHECK_OUT', book }), []);
```

## What this app does

A library checkout app: search (`useState`), the checkout cart
(`useReducer`), the light/dark theme (`useContext`), auto-focusing the
search box (`useRef` + `useEffect`), the browser tab title
(`useEffect`), the filtered book list (`useMemo`), and the check
out/return handlers (`useCallback`).

## How to run

```
cd week12-react-hooks/library-hooks-demo
npm install
npm run dev
```
