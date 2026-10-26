# Week 5 - Streams, standard streams, server, routes, headers, gateway

Topics: readable/writable streams, standard streams (stdin/stdout),
creating a server, routes, accessing request headers, a gateway using
Node.js.

## streams-basic

Express routes that append to a file and read it back, plus a separate
`read.js` script using a readable stream.

```
cd week05-streams-server/streams-basic
npm install
npm start
```

Try http://localhost:3000/students and
http://localhost:3000/add?name=Asha&roll=12&class=TYBCA

In another terminal:

```
node read.js
```

## streams-two-files

Pipes a readable stream into a writable stream, using two different
files (reading and writing the same file can truncate it). Also shows
the standard streams (`process.stdin`, `process.stdout`).

```
cd week05-streams-server/streams-two-files
node app.js
```

Type something and press Enter; press Ctrl+C to stop.

## request-headers

```
cd week05-streams-server/request-headers
npm install
npm start
```

Open http://localhost:3000/headers in a browser.

## gateway

A plain Node.js server (the gateway) that forwards requests to a second
backend server and relays the response back.

```
cd week05-streams-server/gateway
node backend.js
```

In another terminal:

```
node gateway.js
```

Open http://localhost:3000/anything - the gateway forwards it to the
backend on port 4000 and returns the backend's response.
