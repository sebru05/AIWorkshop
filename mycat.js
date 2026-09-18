const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
    console.log('Missing Argument');
    console.log(`Usage: node ${path.basename(process.argv[1])} <FILENAME>`);
    return;
}

const filename = process.argv[2];
const content = fs.readFileSync(filename, 'utf-8');

console.log(content);