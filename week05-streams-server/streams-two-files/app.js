// Readable/writable streams and the standard streams (stdin/stdout).
// Reading from and writing to the SAME file can truncate or corrupt it,
// so the source and the copy are two separate files here.
const fs = require('fs');

const readerStream = fs.createReadStream('source.txt', { encoding: 'utf-8' });
const writerStream = fs.createWriteStream('copy.txt', { encoding: 'utf-8' });

readerStream.pipe(writerStream);

process.stdout.write('Copying source.txt to copy.txt...\n');
process.stdout.write('Type something and press Enter (Ctrl+C to stop):\n');

process.stdin.on('data', (data) => {
    process.stdout.write(`You entered: ${data.toString()}`);
});
