// https://school.programmers.co.kr/learn/courses/30/lessons/181946

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  console.log(`${input[0]}${input[1]}`);
});
