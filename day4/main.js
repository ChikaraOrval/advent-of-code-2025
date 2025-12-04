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

const part2 = () => {
  const grid = input.map(row => [...row]);
  let count = 0;

  while (true) {
    const toRemove = [];
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] !== '@') continue;
        const neighbors = [
          grid[r-1]?.[c-1], grid[r-1]?.[c], grid[r-1]?.[c+1],
          grid[r]?.[c-1],                   grid[r]?.[c+1],
          grid[r+1]?.[c-1], grid[r+1]?.[c], grid[r+1]?.[c+1]
        ].filter(x => x === '@').length;
        if (neighbors < 4) toRemove.push([r, c]);
      }
    }
    if (toRemove.length === 0) break;
    for (const [r, c] of toRemove) grid[r][c] = '.';
    count += toRemove.length;
  }
  return count;
};

console.log(`${part1()} ${part2()}`);
