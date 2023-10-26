const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    
    let message = input%2 === 1 ? " is odd" : " is even"
    
    console.log(input + message)
}).on('close', function () {
    n = Number(input[0]);
});