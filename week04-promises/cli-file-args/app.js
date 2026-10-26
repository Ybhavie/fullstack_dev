// Command line arguments, and reading/writing files.
// Usage: node app.js <filename> <message>
const fs = require('fs');

const fileName = process.argv[2] || 'note.txt';
const message = process.argv[3] || 'Hello from the command line';

console.log('File name argument:', fileName);
console.log('Message argument:', message);

fs.writeFile(fileName, message + '\n', (err) => {
    if (err) {
        console.error('Write failed:', err);
        return;
    }

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Read failed:', err);
            return;
        }

        console.log('File contents:', data);
    });
});
