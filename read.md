# Full-Stack Development Lab Cheat Sheet

This guide reviews the Node.js and React topics covered by the labs: modules,
Express, events, promises, file operations, streams, cron jobs, webpack, and
React with Vite.

## Setup Commands

Run these commands from the project folder that contains the relevant
`package.json`:

```sh
npm init -y
npm install express
npm install --save-dev nodemon
npm install node-cron
node app.js
```

To use nodemon, add a start script to `package.json` and run `npm start`:

```json
{
  "scripts": {
    "start": "nodemon app.js"
  }
}
```

For `import` and `export` syntax, set `"type": "module"` in `package.json`.
For `require()` and `module.exports`, use CommonJS (the default when the
package does not specify `"type": "module"`). Do not mix the two module
systems in the same file.

## Lab 1: Modules, Express, and HTTP

```js
// mathModule.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// app.js
const express = require("express");
const { add } = require("./mathModule");
const app = express();

app.get("/", (req, res) => res.send(`Main Page. 2 + 3 = ${add(2, 3)}`));
app.get("/about", (req, res) => res.send("About Page"));

app.listen(3000, () => {
  console.log("Open http://localhost:3000");
});
```

A server using Node's built-in `http` module:

```js
const http = require("node:http");

http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello");
}).listen(3000);
```

## Lab 2: ES Modules and Query Parameters

```js
// math.js
export function simpleInterest(principal, rate, years) {
  const interest = (principal * rate * years) / 100;
  return {
    amount: (principal + interest).toFixed(2),
    interest: interest.toFixed(2),
  };
}
```

```js
// app.js (package.json must specify "type": "module")
import express from "express";
import { simpleInterest } from "./math.js";

const app = express();

app.get("/si", (req, res) => {
  const { init, intRate, NoFyears } = req.query;
  const result = simpleInterest(
    Number(init),
    Number(intRate),
    Number(NoFyears),
  );
  res.json(result);
});

app.listen(3000);
```

Try a URL such as `http://localhost:3000/si?init=1000&intRate=10&NoFyears=3`.
For compound interest, the exponent is `n * t`, not `n + t`:
`Math.pow(1 + r / n, n * t)`.

## Lab 3: Event Loop and EventEmitter

```js
console.log("1");
setTimeout(() => console.log("timeout"), 0);
console.log("3");
// Output order: 1, 3, timeout

const EventEmitter = require("node:events");
const events = new EventEmitter();

events.on("PatientComes", () => console.log("Doctor treats patient"));
events.emit("PatientComes");
```

Synchronous statements run first; timer callbacks run later through the
event loop.

## Lab 4: Promises and async/await

```js
const checkMarks = (marks) =>
  new Promise((resolve, reject) => {
    if (marks >= 75) resolve("Distinction");
    else if (marks >= 60) resolve("FirstClass");
    else if (marks >= 50) resolve("SecondClass");
    else reject(new Error("Fail"));
  });

checkMarks(80)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

async function run() {
  try {
    console.log(await checkMarks(80));
  } catch (error) {
    console.log(error.message);
  }
}

run();
```

To resolve a promise after a delay:

```js
const delay = (message) =>
  new Promise((resolve) => setTimeout(() => resolve(message), 1000));
```

## Lab 5: File System and Streams

```js
const fs = require("node:fs");

fs.writeFile("a.txt", "Hello", (error) => {}); // overwrite
fs.appendFile("a.txt", " more", (error) => {}); // append
fs.readFile("a.txt", "utf8", (error, data) => console.log(data));

const text = fs.readFileSync("a.txt", "utf8"); // synchronous/blocking

const reader = fs.createReadStream("big.txt", { encoding: "utf8" });
reader.on("data", (chunk) => console.log(chunk));

const writer = fs.createWriteStream("out.txt", { flags: "a" });
writer.write("line\n");
reader.pipe(writer); // copy the input stream to a different output file
```

Use different paths for read and write streams. Reading and writing the same
file can truncate or corrupt the input.

## Lab 8: Cron, Sync vs. Async, and Webpack

Schedule a callback every five seconds with `node-cron`:

```js
const cron = require("node-cron");

cron.schedule("*/5 * * * * *", () => {
  console.log("Every 5 seconds", new Date());
});
```

`readFileSync` blocks the program until the read finishes. `readFile` is
asynchronous, so statements after it can run before its callback.

Install webpack and its command-line tool in the webpack exercise folder, then
run the existing configuration from `lab8/webpack`:

```sh
npm install --save-dev webpack webpack-cli
npx webpack --config app/webpack.config.js
```

```js
// app/webpack.config.js
const path = require("node:path");

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
};
```

## Lab 12: React with Vite

Create a new React app with Vite:

```sh
npm create vite@latest student-management -- --template react
cd student-management
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

Example of state, a list, props, and a child component:

```jsx
import { useState } from "react";

function StudentList() {
  const [theme, setTheme] = useState("light");
  const students = [
    { id: 1, name: "Asha", className: "TYBCA" },
    { id: 2, name: "Ravi", className: "TYBCA" },
  ];

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme}
      </button>
      {students.map((student, index) => (
        <StudentCard key={student.id} student={student} index={index} />
      ))}
    </div>
  );
}

function StudentCard({ student, index }) {
  return (
    <div>
      <p>
        {index}. {student.name} ({student.className})
      </p>
    </div>
  );
}

export default StudentList;
```

Context and refs:

```jsx
import { createContext, useContext, useRef } from "react";

const StudentContext = createContext(null);

// Provider: <StudentContext.Provider value={student}><Card /></StudentContext.Provider>
// Consumer: const student = useContext(StudentContext);

const inputRef = useRef(null);
// Attach it with <input ref={inputRef} />; then call inputRef.current.focus().
```

## A 30-Minute Review Plan

1. **10 minutes:** Recreate and run the Lab 4 promise and Lab 5 file examples.
2. **10 minutes:** Run Express routes with query parameters, then try the cron
   example.
3. **10 minutes:** Create a Vite app, build a stateful student list, and run it
   in the browser.