const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

const part1 = () => {
  let count = 0;
  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input[r].length; c++) {
      if (input[r][c] !== '@') continue;
      const neighbors = [
        input[r-1]?.[c-1], input[r-1]?.[c], input[r-1]?.[c+1],
        input[r]?.[c-1],                    input[r]?.[c+1],
        input[r+1]?.[c-1], input[r+1]?.[c], input[r+1]?.[c+1]
      ].filter(x => x === '@').length;
      if (neighbors < 4) count++;
    }
  }
  return count;
};

console.log(part1());
