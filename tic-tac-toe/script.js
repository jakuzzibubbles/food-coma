const Gameboard = (() => {
  let board = Array(9).fill(null);

  const getBoard = () => board;
  const setMark = (index, mark) => {
    if (!board[index]) board[index] = mark;
  };
  const reset = () => board.fill(null);

  return { getBoard, setMark, reset };
})();

const Player = (name, mark) => {
  return { name, mark };
};

const GameController = (() => {
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  let currentPlayer = player1;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const checkWinner = () => {
    const board = Gameboard.getBoard();
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return currentPlayer;
      }
    }
    return board.includes(null) ? null : "Tie";
  };

  const playRound = (index) => {
    if (!Gameboard.getBoard()[index]) {
      Gameboard.setMark(index, currentPlayer.mark);
      const winner = checkWinner();
      if (winner) return winner;
      switchPlayer();
    }
    return null;
  };

  const getCurrentPlayer = () => currentPlayer;

  return { playRound, getCurrentPlayer };
})();

const DisplayController = (() => {
  const gameboardDiv = document.querySelector("#gameboard");
  const statusDiv = document.querySelector("#status");
  const restartBtn = document.querySelector("#restart");

  const renderBoard = () => {
    gameboardDiv.innerHTML = "";
    Gameboard.getBoard().forEach((mark, index) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = mark || "";
      cell.addEventListener("click", () => handleCellClick(index));
      if (mark) cell.classList.add("taken");
      gameboardDiv.appendChild(cell);
    });
  };

  const handleCellClick = (index) => {
    const winner = GameController.playRound(index);
    renderBoard();
    if (winner) {
      statusDiv.textContent =
        winner === "Tie" ? "It's a tie!" : `${winner.name} wins!`;
    } else {
      statusDiv.textContent = `Current Player: ${
        GameController.getCurrentPlayer().name
      }`;
    }
  };

  const init = () => {
    restartBtn.addEventListener("click", () => {
      Gameboard.reset();
      renderBoard();
      statusDiv.textContent = `Current Player: ${
        GameController.getCurrentPlayer().name
      }`;
    });
    renderBoard();
  };

  return { init };
})();

DisplayController.init();
