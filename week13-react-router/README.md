# Week 13 - React Router, navigation

## Notes

By default, a React app is a single HTML page - **React Router**
makes it feel like multiple pages by swapping which component renders
based on the URL, without a full page reload.

**`BrowserRouter`** wraps the whole app and enables routing (wrap it
once, at the top, in `main.jsx`):

```jsx
<BrowserRouter>
    <App />
</BrowserRouter>
```

**`Routes` / `Route`** - map a URL path to a component:

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="*" element={<NotFound />} />
</Routes>
```

`:id` is a **dynamic segment** - it matches anything in that position
of the URL. `*` catches any path nothing else matched (a 404 page).

**`Link` / `NavLink`** - navigate without a full page reload (a plain
`<a href>` would reload the whole page and lose React's state):

```jsx
<Link to="/products">Browse products</Link>
```

`NavLink` is the same, but adds an `isActive` flag you can use to
style the current page's link differently:

```jsx
<NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
```

**`useParams`** - reads the dynamic part of the current URL inside
the matched component:

```jsx
const { id } = useParams();   // on /products/3, id === "3"
```

**`useNavigate`** - navigate from code (e.g. after a button click or
a form submit), instead of a link the user clicks:

```jsx
const navigate = useNavigate();
navigate('/products');
```

## What this app does

A shop with Home, Products (a list), Product Detail (`/products/:id`,
read with `useParams`), Cart, and a catch-all 404 page. `NavBar` uses
`NavLink` to highlight the current page.

## How to run

```
cd week13-react-router/shop-router-demo
npm install
npm run dev
```
