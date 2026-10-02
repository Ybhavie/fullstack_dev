const fs = require("fs");
console.log("1");
fs.readFile("./text.txt", "utf8", (error, data) => {
    // if (error) {
    //     console.error(error);
    //     return;
    // }

    // const fileContent = data;
    // console.log(fileContent);
    console.log(data);
});

console.log("2");
console.log("3");
const data = fs.readFileSync("./text.txt", "utf8");
console.log(data);
console.log("4");

