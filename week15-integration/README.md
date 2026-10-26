# Week 15 - Integrating a Node.js app with React

## Notes

Up to now, Express (the backend) and React (the frontend) have mostly
lived in the same project. In a typical real app, they're **two
separate processes**: an API server, and a frontend that talks to it
over HTTP.

**The API side** - a normal Express server that returns JSON instead
of HTML:

```js
app.get('/api/books', (req, res) => {
    res.json(books);
});
```

**CORS** (Cross-Origin Resource Sharing): a browser blocks a page on
one origin (`http://localhost:5173`) from calling an API on a
different origin (`http://localhost:4000`) unless the API explicitly
allows it. The `cors` package adds the right response headers:

```js
const cors = require('cors');
app.use(cors());
```

**The React side** - uses the browser's built-in `fetch()` to call
the API, inside `useEffect` so it runs once when the component mounts:

```jsx
useEffect(() => {
    fetch('http://localhost:4000/api/books')
        .then((res) => res.json())
        .then(setBooks);
}, []);
```

**Sending data to the API** (a POST request with a JSON body):

```jsx
await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author }),
});
```

Both halves run independently - the API on one port, the React dev
server on another - which is why **both need to be started**, in two
separate terminals, for this to work.

## Files

- `api/app.js` - GET and POST `/api/books`.
- `client/src/App.jsx` - fetches the book list on load, and a form
  that posts a new book.

## How to run

Start the API first:

```
cd week15-integration/api
npm install
npm start
```

Then, in another terminal, start the React app:

```
cd week15-integration/client
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173/.
