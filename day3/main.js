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

const part2 = () => {
  const maxJoltage = (line, count, start = 0) => {
    if (count === 0) return '';
    const endPos = line.length - count;
    let maxDigit = '0', maxIdx = start;
    for (let i = start; i <= endPos; i++) {
      if (line[i] > maxDigit) {
        maxDigit = line[i];
        maxIdx = i;
      }
    }
    return maxDigit + maxJoltage(line, count - 1, maxIdx + 1);
  };

  return input.reduce((sum, line) => sum + Number(maxJoltage(line, 12)), 0);
};

console.log(`${part1()} ${part2()}`);
