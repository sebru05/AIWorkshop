const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
    console.log('Missing Argument');
    console.log(`Usage: node ${path.basename(process.argv[1])} <FILENAME>`);
    return;
}

let filename = process.argv[2];

let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');

for (let i = 0; i < 10; i++) {
    console.log(lines[i]);
}