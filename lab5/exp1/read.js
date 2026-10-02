const fs= require("fs");

fs.readFile("app.txt","utf-8", (err,data)=>{
    console.log(data);
})

fs.writeFile("app.txt","Hello World",(err)=>{
    console.log(err);
})

fs.writeFile("app.txt","Hello World",(err)=>{
    console.log(err);
})

const readstream = fs.createReadStream("input.txt", {
    encoding: "utf-8",
    highWaterMark : 100
});
    
readstream.emit()
readstream.on("data",(data)=>{
    console.log("=============================")
    console.log(data);
});



















