const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim();

const part1 = () => {
  const [rangeSection, idSection] = input.split('\n\n');
  const ranges = rangeSection.split('\n').map(line => {
    const [start, end] = line.split('-').map(Number);
    return [start, end];
  });
  const ids = idSection.split('\n').map(Number);

  let count = 0;
  for (const id of ids) {
    for (const [start, end] of ranges) {
      if (id >= start && id <= end) {
        count++;
        break;
      }
    }
  }
  return count;
};

const part2 = () => {
  const rangeSection = input.split('\n\n')[0];
  const ranges = rangeSection.split('\n').map(line => {
    const [start, end] = line.split('-').map(Number);
    return [start, end];
  });

  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  for (const [start, end] of ranges) {
    if (merged.length === 0 || start > merged[merged.length - 1][1] + 1) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
    }
  }

  let count = 0;
  for (const [start, end] of merged) {
    count += end - start + 1;
  }
  return count;
};

console.log(`${part1()} ${part2()}`);
