const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

const students = require('./studentData');

const saveStudentsToFile = () => {
    let data = '';
    students.forEach(s => {
        data += `Name: ${s.name}, Roll No: ${s.rollNo}, Class: ${s.class}, Div: ${s.div}\n`;
    });

    fs.writeFileSync('students.txt', data);
};

app.get('/students', (req, res) => {
    saveStudentsToFile();

    const fileContent = fs.readFileSync('students.txt', 'utf-8');
    res.type('text/plain').send(fileContent);
});

saveStudentsToFile();

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:3000`);
});