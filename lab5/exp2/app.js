const fs = require("fs");

// const createWriteStream = fs.createWriteStream("verylargefile.txt", { encoding: "utf-8" });

// createWriteStream.write("Vaibhavi\n");
// createWriteStream.write("Sitaram\n");
// createWriteStream.write("Shiwang\n");
// createWriteStream.write("Samarth\n");
// createWriteStream.write("Shweta\n");
// createWriteStream.write("Rakshata\n");

// createWriteStream.end(); 

const readerStream = fs.createReadStream("verylargefile.txt", { encoding: "utf-8" });
const writerStream = fs.createWriteStream("verylargefile.txt", { encoding: "utf-8" });

readerStream.pipe(writerStream);

process.stdin.on("data", (data) => {
    console.log(`You entered: ${data.toString()}`);
});