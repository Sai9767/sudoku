const _board = [
  [".", ".", ".", ".", ".", "3", "4", ".", "."],
  [".", "9", ".", ".", "4", ".", "1", "6", "."],
  [".", ".", ".", "1", "7", ".", ".", "9", "."],
  ["1", "8", ".", ".", "3", "4", "6", ".", "5"],
  [".", ".", "6", ".", ".", ".", "9", ".", "."],
  ["5", ".", ".", "8", "6", ".", ".", "1", "2"],
  [".", ".", ".", ".", "1", "5", ".", ".", "."],
  [".", "6", "3", ".", "2", ".", ".", "4", "."],
  [".", ".", "1", "3", ".", ".", ".", ".", "."],
];
sodoko(_board);
console.log(_board);

function fillDot(board, row, col, z) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == z || board[i][col] == z || board[m][n] == z) {
      return false;
    }
  }
  return true;
}

function sodoko(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == ".") {
        for (let z = 1; z <= 9; z++) {
          if (fillDot(data, i, j, z)) {
            data[i][j] = `${z}`;
            if (sodoko(data)) {
              return true;
            } else {
              data[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
