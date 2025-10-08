const words = [
  "BONES",
  "DAY",
  "DUST",
  "MOCKED",
  "RESURRECTED",
  "CLOUDS",
  "DELAY",
  "FIRE",
  "RAIN",
  "SHADOW",
  "DESTROYED",
  "GATHERED",
  "SIGNS",
  "SINNERS",
];

const gridSize = 15; // You can adjust this
const matrix = Array.from({ length: gridSize }, () =>
  Array.from({ length: gridSize }, () => "")
);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function canPlace(word, row, col, dx, dy) {
  for (let i = 0; i < word.length; i++) {
    const r = row + dy * i;
    const c = col + dx * i;
    if (
      r < 0 ||
      c < 0 ||
      r >= gridSize ||
      c >= gridSize ||
      (matrix[r][c] && matrix[r][c] !== word[i])
    ) {
      return false;
    }
  }
  return true;
}

function placeWord(word) {
  const directions = [
    [1, 0], // Horizontal
    [0, 1], // Vertical
    [1, 1], // Diagonal down-right
    [-1, 1], // Diagonal down-left
  ];

  let placed = false;
  while (!placed) {
    const dir = directions[getRandomInt(directions.length)];
    const row = getRandomInt(gridSize);
    const col = getRandomInt(gridSize);
    if (canPlace(word, row, col, dir[0], dir[1])) {
      for (let i = 0; i < word.length; i++) {
        matrix[row + dir[1] * i][col + dir[0] * i] = word[i];
      }
      placed = true;
    }
  }
}

for (const word of words) {
  placeWord(word.toUpperCase());
}

// Fill empty spaces with random letters
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    if (!matrix[i][j]) {
      matrix[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
  }
}

console.log(matrix);
