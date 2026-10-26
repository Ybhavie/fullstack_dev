# Week 6 - Cron jobs, blocking vs. non-blocking, webpack

## cron-blocking

Compares a synchronous (blocking) file read with an asynchronous
(non-blocking) one, and schedules a few cron jobs with `node-cron`.

```
cd week06-cron-webpack/cron-blocking
npm install
npm start
```

It keeps running and prints a message on each cron tick. Press Ctrl+C
to stop it.

## webpack-demo

A minimal webpack setup: `src/app.js` requires `src/message.js` and
logs its message, bundled by webpack into `dist/bundle.js`.

```
cd week06-cron-webpack/webpack-demo
npm install
npm run build
node dist/bundle.js
```
