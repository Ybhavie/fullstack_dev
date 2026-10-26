# Week 4 - Promises, promise chaining, command line arguments, files

Topics: Promises, chaining `.then()`, async/await, command line
arguments (`process.argv`), reading and writing files.

## admission-promise-chain

A student admission process modeled as a chain of promises, plus an
Express route that writes and reads a file.

```
cd week04-promises/admission-promise-chain
npm install
node app.js
```

Then separately:

```
node server.js
```

Open http://localhost:3000/students in a browser.

## promise-async-await

The same admission flow written with `async`/`await` instead of
`.then()` chains, served over Express.

```
cd week04-promises/promise-async-await
npm install
npm start
```

Open:
- http://localhost:3000/
- http://localhost:3000/admission

## cli-file-args

Reads a file name and a message from the command line, writes the
message to that file, then reads it back.

```
cd week04-promises/cli-file-args
node app.js myfile.txt "Hello from CLI"
```
