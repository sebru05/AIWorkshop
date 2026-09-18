const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
    console.log('Missing Argument');
    console.log(`Usage: node ${path.basename(process.argv[1])} <PATTERN> <FILENAME>`);
    return;
}

const pattern = process.argv[2];
const filename = process.argv[3];

const content = fs.readFileSync(filename, 'utf-8');
const lines = content.split('\n');

let count = 0;

for (let line of lines) {
    if (line.includes(pattern) && count < 10) {
        console.log(line);
        count++;
    }
}