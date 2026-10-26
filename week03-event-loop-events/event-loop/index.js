// Synchronous code runs first. setTimeout callbacks run later, through
// the event loop, even with a delay of 0ms.
console.log("1");

setTimeout(() => {
    console.log("timeout 100ms");
}, 100);

setTimeout(() => {
    console.log("timeout 0ms");
}, 0);

console.log("3");

// Expected order: 1, 3, timeout 0ms, timeout 100ms
