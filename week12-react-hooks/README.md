# Week 12 - React hooks

A small library checkout app covering: `useState`, `useReducer`,
`useContext`, `useRef`, `useEffect`, `useMemo`, `useCallback`.

- `useState` - the search box text.
- `useReducer` - the checkout cart (check out, return, return all).
- `useContext` - the light/dark theme shared via `ThemeContext`.
- `useRef` - focuses the search box when the app loads.
- `useEffect` - updates the browser tab title with the cart size.
- `useMemo` - recomputes the filtered book list only when the catalog
  or search term changes.
- `useCallback` - keeps the check-out/return handlers stable across
  re-renders.

```
cd week12-react-hooks/library-hooks-demo
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173/.
