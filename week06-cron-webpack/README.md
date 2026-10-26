# Week 6 - Cron jobs, blocking vs. non-blocking, webpack

## Notes

**Blocking (synchronous)** code stops the whole program until it
finishes - e.g. `fs.readFileSync()`. Nothing else can run during that
time.

**Non-blocking (asynchronous)** code starts an operation and moves on
immediately; the result arrives later via a callback/promise - e.g.
`fs.readFile()`. This is why Node can handle many requests on one
thread: it's not sitting idle waiting for slow I/O.

```js
fs.readFileSync('file.txt');     // blocks here until done
fs.readFile('file.txt', cb);     // returns immediately, cb runs later
console.log('this runs before the async read finishes');
```

**Cron jobs** run a function on a schedule, using cron syntax
(`* * * * * *` = second, minute, hour, day, month, weekday). With
`node-cron`:

```js
const cron = require('node-cron');
cron.schedule('*/5 * * * * *', () => {
    console.log('runs every 5 seconds');
});
```

**Webpack** bundles multiple JS files (and their `require`/`import`
dependencies) into one output file, so a browser only needs to load
one `<script>`:

```js
// webpack.config.js
module.exports = {
    entry: './src/app.js',           // where bundling starts
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',              // or 'development'
};
```

Running `npx webpack` (or `npm run build` with a `build` script)
reads the entry file, follows every `require()`/`import` it finds,
and writes them all into `dist/bundle.js`.

## Files

- `cron-blocking/app.js` - compares a sync vs. async file read, and
  schedules three cron jobs.
- `webpack-demo/` - `src/app.js` requires `src/message.js`; webpack
  bundles both into `dist/bundle.js`.

## How to run

```
cd week06-cron-webpack/cron-blocking
npm install
npm start
```

```
cd week06-cron-webpack/webpack-demo
npm install
npm run build
node dist/bundle.js
```
