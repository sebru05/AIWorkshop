const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
    console.log('Missing Argument');
    console.log(`Usage: node ${path.basename(process.argv[1])} <FILENAME>`);
    return;
}

const filename = process.argv[2];
const content = fs.readFileSync(filename, 'utf-8');
const lines = content.split('\n');

const start = Math.max(0, lines.length - 11);

for (let i = start; i < lines.length; i++) {
    if (lines[i] !== '') {
        console.log(lines[i]);
    }
}