const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim();

const part1 = () => {
  const isDoubledPattern = (number) => {
    const str = String(number);
    const halfLength = str.length / 2;
    return str.length % 2 === 0 && str.slice(0, halfLength) === str.slice(halfLength);
  };

  const ranges = input.split(',').map(range => {
    const [start, end] = range.split('-').map(Number);
    return { start, end };
  });

  let invalidSum = 0;
  for (const { start, end } of ranges) {
    for (let id = start; id <= end; id++) {
      if (isDoubledPattern(id)) invalidSum += id;
    }
  }
  return invalidSum;
};

const part2 = () => {
  const isRepeatedPattern = (number) => {
    const str = String(number);
    const length = str.length;
    for (let patternLength = 1; patternLength <= length / 2; patternLength++) {
      if (length % patternLength === 0) {
        const pattern = str.slice(0, patternLength);
        if (pattern.repeat(length / patternLength) === str) {
          return true;
        }
      }
    }
    return false;
  };

  const ranges = input.split(',').map(range => {
    const [start, end] = range.split('-').map(Number);
    return { start, end };
  });

  let invalidSum = 0;
  for (const { start, end } of ranges) {
    for (let id = start; id <= end; id++) {
      if (isRepeatedPattern(id)) invalidSum += id;
    }
  }
  return invalidSum;
};

console.log(`${part1()} ${part2()}`);
