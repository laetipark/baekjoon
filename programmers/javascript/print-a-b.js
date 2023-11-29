// https://school.programmers.co.kr/learn/courses/30/lessons/181951?language=javascript

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  console.log('a =', Number(input[0]));
  console.log('b =', Number(input[1]));
});