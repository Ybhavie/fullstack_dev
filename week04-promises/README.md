# Week 4 - Promises, promise chaining, command line arguments, files

## Notes

A **Promise** represents a value that isn't ready yet. It has three
states: pending, fulfilled (resolved), or rejected.

```js
const checkMarks = (marks) => {
    return new Promise((resolve, reject) => {
        if (marks >= 50) resolve('Pass');
        else reject('Fail');
    });
};

checkMarks(80)
    .then((result) => console.log(result))   // runs if resolved
    .catch((error) => console.log(error));   // runs if rejected
```

**Promise chaining**: returning a promise inside `.then()` lets the
next `.then()` wait for it, so steps run one after another instead of
nesting ("callback hell"):

```js
buyProspectus()
    .then((result) => { console.log(result); return fillForm(); })
    .then((result) => { console.log(result); return submitForm(); })
    .catch((error) => console.error(error));
```

**async/await** is syntax sugar over the same thing - `await` pauses
the function until the promise settles, and a `try/catch` around it
replaces `.catch()`:

```js
async function run() {
    try {
        const result = await checkMarks(80);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
```

**Command line arguments**: `process.argv` is an array; index 0 is
the node binary, index 1 is the script path, index 2+ are the actual
arguments (`node app.js foo bar` -> `argv[2] === 'foo'`).

**Reading/writing files** (`require('fs')`):

```js
fs.writeFile('file.txt', 'data', (err) => { ... });        // async
fs.readFile('file.txt', 'utf8', (err, data) => { ... });   // async
fs.writeFileSync('file.txt', 'data');                        // sync
```

## Files

- `admission-promise-chain/` - a student admission flow as a promise
  chain (`app.js`), plus a server that writes/reads a file (`server.js`).
- `promise-async-await/` - the same flow written with async/await.
- `cli-file-args/` - reads `process.argv`, writes it to a file, reads
  it back.

## How to run

```
cd week04-promises/admission-promise-chain
npm install
node app.js
node server.js   # then open http://localhost:3000/students
```

```
cd week04-promises/promise-async-await
npm install
npm start   # open http://localhost:3000/admission
```

```
cd week04-promises/cli-file-args
node app.js myfile.txt "Hello from CLI"
```
