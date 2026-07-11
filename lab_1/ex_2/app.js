const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Main Page")
});

app.listen(3000);

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/home', (req, res) =>{
    res.send("Home Page")
})

app.get('/teacher', (req, res) =>{
    res.send("Teacher")
})