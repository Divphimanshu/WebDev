let currentPlayer = 'X';
let gameActive = true;

function makeMove(cell) {
  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById('status').textContent = `${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (isDraw()) {
    document.getElementById('status').textContent = `It's a draw!`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  const cells = document.querySelectorAll('.cell');
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  return wins.some(comb => {
    const [a, b, c] = comb;
    return (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    );
  });
}

function isDraw() {
  const cells = document.querySelectorAll('.cell');
  return [...cells].every(cell => cell.textContent !== '');
}

function resetGame() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => (cell.textContent = ''));
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('status').textContent = `${currentPlayer}'s turn`;
}

// Initialize status
document.getElementById('status').textContent = `${currentPlayer}'s turn`;
