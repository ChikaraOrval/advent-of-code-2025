const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

const part1 = () => {
  const maxJoltage = (line) => {
    let max = 0;
    for (let i = 0; i < line.length; i++) {
      for (let j = i + 1; j < line.length; j++) {
        max = Math.max(max, +line[i] * 10 + +line[j]);
      }
    }
    return max;
  };

  return input.reduce((sum, line) => sum + maxJoltage(line), 0);
};

console.log(part1());
