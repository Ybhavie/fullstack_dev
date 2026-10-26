# Week 5 - Streams, standard streams, server, routes, headers, gateway

## Notes

A **stream** reads or writes data in chunks instead of loading the
whole thing into memory at once - important for large files.

- **Readable stream**: `fs.createReadStream(path)`, emits `'data'`
  events with each chunk.
- **Writable stream**: `fs.createWriteStream(path)`, has `.write()`
  and `.end()`.
- **`.pipe()`** connects a readable stream straight to a writable one:

```js
readableStream.pipe(writableStream);
```

Reading from and writing to the **same file at the same time** can
truncate or corrupt it - always use two different files (or paths).

**Standard streams** are always available on `process`, no `fs`
needed:

- `process.stdin` - readable stream of terminal input.
- `process.stdout` - writable stream for terminal output (what
  `console.log` uses under the hood).

**Routes** in Express map an HTTP method + path to a handler:
`app.get('/path', (req, res) => {...})`.

**Request headers** - metadata sent with every request (browser,
content type, etc.). In Express: `req.headers` (an object) or
`req.get('Header-Name')` for one specific header.

**A gateway** is a server that sits in front of another server and
forwards requests to it (the basic idea behind reverse proxies and
API gateways). Node's `http.request()` lets one server make a request
to another server and relay the response back.

## Files

- `streams-basic/` - Express routes that append to a file with a
  write stream, plus `read.js` reading with a readable stream.
- `streams-two-files/` - pipes `source.txt` into `copy.txt` (two
  files, not one), and shows `process.stdin`/`process.stdout`.
- `request-headers/` - a route that reads and returns `req.headers`.
- `gateway/` - `backend.js` (a real server) and `gateway.js` (forwards
  every request to it and relays the response).

## How to run

```
cd week05-streams-server/streams-basic
npm install
npm start
# then: node read.js (in another terminal)
```

```
cd week05-streams-server/streams-two-files
node app.js
```

```
cd week05-streams-server/request-headers
npm install
npm start
# open http://localhost:3000/headers
```

```
cd week05-streams-server/gateway
node backend.js
# in another terminal:
node gateway.js
# open http://localhost:3000/anything
```
