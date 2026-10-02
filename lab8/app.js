const fs = require("fs");
const cron = require("node-cron");

console.log("\n=== Synchronous (Blocking) Example ===");
const syncStart = Date.now();

const fileContent = fs.readFileSync("text.txt", "utf8");
console.log("Sync read file size:", fileContent.length);
console.log("Sync read time:", Date.now() - syncStart, "ms");

console.log("\n=== Asynchronous (Non-Blocking) Example ===");
const asyncStart = Date.now();
fs.readFile("text.txt", "utf8", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log("Async read file size:", data.length);
    console.log("Async read time:", Date.now() - asyncStart, "ms");
});

console.log("This log runs immediately because readFile is non-blocking.");

cron.schedule("*/30 * * * * *", () => {
    console.log("Called At", new Date());
});

cron.schedule("*/45 * * * * *", () => {
    console.log("Called At", new Date());
});

cron.schedule("*/2 * * * * *", () => {
    console.log("Called At", new Date());
});


fs.readFile( )