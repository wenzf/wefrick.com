export function golNewGeneration(board: number[][]) {
  const columns = board.length
  const rows = columns
  let next = board
  // check neighbors
  for (let x = 1; x < columns - 1; x += 1) {
    for (let y = 1; y < rows - 1; y += 1) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
          neighbors += board[x + i][y + j];
        }
      }

      neighbors -= board[x][y];
      // apply rules
      if ((board[x][y] == 1) && (neighbors < 2)) {
        next[x][y] = 0; // lonley
      } else if ((board[x][y] == 1) && (neighbors > 3)) {
        next[x][y] = 0; // overpopulated
      } else if ((board[x][y] == 0) && (neighbors == 3)) {
        next[x][y] = 1; // reproduce
      } else {
        next[x][y] = board[x][y]; // statis
      }
    }
  }

  const temp = board;
  board = next;
  next = temp;
  return next;
}
