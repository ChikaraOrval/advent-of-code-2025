const fs = require('fs');
const rotations = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

const part1 = (rotations) => {
  const { zeroCount } = rotations.reduce(({ position, zeroCount }, rotation) => {
    const direction = rotation[0];
    const distance = parseInt(rotation.slice(1));
    const newPosition = ((position + (direction === 'R' ? distance : -distance)) % 100 + 100) % 100;
    return { position: newPosition, zeroCount: zeroCount + (newPosition === 0 ? 1 : 0) };
  }, { position: 50, zeroCount: 0 });
  return zeroCount;
};

const part2 = (rotations) => {
  let position = 50, zeroCount = 0;
  for (const rotation of rotations) {
    const direction = rotation[0];
    const distance = parseInt(rotation.slice(1));
    for (let i = 0; i < distance; i++) {
      position = direction === 'R' ? (position + 1) % 100 : (position + 99) % 100;
      if (position === 0) zeroCount++;
    }
  }
  return zeroCount;
};

console.log(`${part1(rotations)} ${part2(rotations)}`);
