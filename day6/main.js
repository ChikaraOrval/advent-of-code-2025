const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trimEnd();

const part1 = () => {
  const rows = input.split('\n');
  const height = rows.length;
  const width = Math.max(...rows.map(r => r.length));
  const padded = rows.map(r => r.padEnd(width));

  // Transpose (columns → rows)
  const transposed = [];
  for (let col = 0; col < width; col++) {
    let newRow = '';
    for (let r = 0; r < height; r++) {
      newRow += padded[r][col];
    }
    transposed.push(newRow);
  }

  const problems = [];
  let currentProblem = [];
  for (const tRow of transposed) {
    if (tRow.trim() === '') {
      if (currentProblem.length > 0) {
        problems.push(currentProblem);
        currentProblem = [];
      }
    } else {
      currentProblem.push(tRow);
    }
  }
  if (currentProblem.length > 0) problems.push(currentProblem);

  let count = 0;
  for (const problem of problems) {
    const numbers = [];
    for (let pos = 0; pos < height - 1; pos++) {
      let numStr = '';
      for (const tRow of problem) {
        numStr += tRow[pos];
      }
      const num = parseInt(numStr.trim());
      if (!isNaN(num)) numbers.push(num);
    }

    const op = problem[0][height - 1];

    if (op === '+') {
      count += numbers.reduce((a, b) => a + b, 0);
    } else {
      count += numbers.reduce((a, b) => a * b, 1);
    }
  }

  return count;
};

const part2 = () => {
  return 0;
};

console.log(`${part1()} ${part2()}`);
