# Week 15 - Integrating a Node.js app with React

A small Express API (`api/`) and a React page (`client/`) that fetches
from it and can add new books.

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

Open the local URL Vite prints, usually http://localhost:5173/. It
fetches the book list from http://localhost:4000/api/books and can
post new books to the same endpoint.
