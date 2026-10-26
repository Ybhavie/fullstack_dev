# Week 3 - Event loop, concurrency, async coding, callbacks, EventEmitter

Topics: how the event loop orders synchronous code vs. timers, callbacks,
exception handling, and the built-in `events` module.

## event-loop

```
cd week03-event-loop-events/event-loop
node index.js
```

## event-emitter

A doctor/patient example with `EventEmitter`. One listener checks the
current `doctorAvailable` state so both the "available" and "unavailable"
cases are handled correctly.

```
cd week03-event-loop-events/event-emitter
node index.js
```
