// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    let linha = shipPositions[i][0];
    let coluna = shipPositions[i][1];
    initialBoard[linha][coluna] = "S";
  }
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    let linha = guesses[i][0];
    let coluna = guesses[i][1];
    if (mountedBoard[linha][coluna] === "S") {
      mountedBoard[linha][coluna] = "X";
    }
  }
  return mountedBoard;
}

function checkWinCondition(guessedBoard) {
for (let i = 0; i < guessedBoard.length; i++) {
  for(let j = 0; j < guessedBoard[i].length; j++) {
    if (guessedBoard[i][j] === "S") {
      return false
    }
  }  
} 
return true
}
