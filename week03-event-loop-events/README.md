# Week 3 - Event loop, concurrency, async coding, callbacks, EventEmitter

## Notes

Node.js runs JavaScript on a **single thread**, but it doesn't block
on slow things (timers, file reads, network calls). Instead, it hands
them off and keeps running other code; the **event loop** calls back
into your code once they're done.

**Order of execution:**

1. All synchronous code runs first, top to bottom.
2. Once the main script finishes, the event loop processes timers,
   I/O callbacks, etc., in roughly the order they became ready.

```js
console.log("1");
setTimeout(() => console.log("timeout"), 0);
console.log("3");
// prints: 1, 3, timeout  -  even with a 0ms delay
```

A **callback** is just a function passed to another function, to be
called later (`setTimeout(callback, delay)`, `fs.readFile(path, callback)`).

**Exception handling** with callbacks: Node convention is
`callback(error, result)` - check `error` first, before using `result`.

**EventEmitter** (`require('events')`) is a pattern for
"something happened, run every function that's listening for it":

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('eventName', () => console.log('handled'));
emitter.emit('eventName'); // runs every listener registered above
```

`.on(name, fn)` registers a listener, `.emit(name)` triggers it. Many
listeners can be registered for the same event name.

## Files

- `event-loop/index.js` - demonstrates sync code running before timers.
- `event-emitter/index.js` - a doctor/patient example: one listener
  reacts correctly whether the doctor is available or not.

## How to run

```
cd week03-event-loop-events/event-loop
node index.js
```

```
cd week03-event-loop-events/event-emitter
node index.js
```
