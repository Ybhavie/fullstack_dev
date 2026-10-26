# Week 1 - Node.js basics, npm, Express

## Notes

**Node.js** runs JavaScript outside the browser, in a terminal. It is
built on Chrome's V8 engine and adds things a browser doesn't have,
like the file system, `require()`/modules, and `process`.

**REPL** (Read Eval Print Loop) - typing `node` with no file starts an
interactive shell to try snippets. See `repl-notes.md` for commands.

**package.json** describes a project: its name, dependencies, and
scripts. Create one with:

```
npm init -y
```

**Installing a package** adds it to `node_modules` and lists it under
`dependencies` in `package.json`:

```
npm install express
```

A package under `devDependencies` (installed with `npm install -D`)
is only needed during development, e.g. `nodemon`, which restarts the
server automatically when a file changes.

**Express** is a minimal web framework on top of Node's `http` module.
A route is `app.METHOD(path, handler)`:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Main Page');
});

app.listen(3000);
```

`req` is the incoming request, `res` is what you send back. `res.send()`
sends plain text/HTML, `res.json()` sends JSON.

## Files

- `ex1-functions/app.js` - plain JS functions, no dependencies.
- `ex2-express-server/app.js` - an Express server with four routes.

## How to run

```
cd week01-node-basics/ex1-functions
node app.js
```

```
cd week01-node-basics/ex2-express-server
npm install
npm start
```

Open http://localhost:3000/, /about, /home, /contact.
