// initial config
var boardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var lastActiveSymbol = "";
var numberOfPlacedObjects = 0;
window.addEventListener("load", assignListeners);

// adding Listeners
function assignListeners() {
  document.getElementById("c1").addEventListener("click", placeSymbol);
  document.getElementById("c2").addEventListener("click", placeSymbol);
  document.getElementById("c3").addEventListener("click", placeSymbol);
  document.getElementById("c4").addEventListener("click", placeSymbol);
  document.getElementById("c5").addEventListener("click", placeSymbol);
  document.getElementById("c6").addEventListener("click", placeSymbol);
  document.getElementById("c7").addEventListener("click", placeSymbol);
  document.getElementById("c8").addEventListener("click", placeSymbol);
  document.getElementById("c9").addEventListener("click", placeSymbol);
  document.getElementById("resetBtn").addEventListener("click", resetGame);
}
function resetGame() {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      boardState[i][j] = "";
    }
  }

  document.getElementById("c1").innerHTML = "";
  document.getElementById("c2").innerHTML = "";
  document.getElementById("c3").innerHTML = "";
  document.getElementById("c4").innerHTML = "";
  document.getElementById("c5").innerHTML = "";
  document.getElementById("c6").innerHTML = "";
  document.getElementById("c7").innerHTML = "";
  document.getElementById("c8").innerHTML = "";
  document.getElementById("c9").innerHTML = "";
  document.getElementById("result").innerHTML = "Result:";
  lastActiveSymbol = "";
  numberOfPlacedObjects = 0;
  assignListeners();
  console.log("game reset ....");
}

function findSymbol() {
  if (lastActiveSymbol == "") {
    lastActiveSymbol = "X";
    return lastActiveSymbol;
  } else if (lastActiveSymbol == "X") {
    lastActiveSymbol = "O";
    return lastActiveSymbol;
  } else if (lastActiveSymbol == "O") {
    lastActiveSymbol = "X";
    return lastActiveSymbol;
  }
}

function checkForRow(row, col, symbol) {
  for (let i = 0; i < 3; i++) {
    if (boardState[row][i] != symbol) return false;
  }
  return true;
}

function checkForCol(row, col, symbol) {
  for (let i = 0; i < 3; i++) {
    if (boardState[i][col] != symbol) return false;
  }
  return true;
}

function checkForFirstDiagonal(row, col, symbol) {
  for (let i = 0; i < 3; i++) {
    if (boardState[i][i] != symbol) return false;
  }
  return true;
}
function checkForSecondDiagonal(row, col, symbol) {
  let j = 2;
  for (let i = 0; i <= 2; i++) {
    if (boardState[i][j] != symbol) return false;
    j--;
  }
  return true;
}
function checkForDiagonal(row, col, symbol) {
  if ((row == 0 && col == 0) || (row == 2 && col == 2)) {
    return checkForFirstDiagonal(row, col, symbol);
  } else if ((row == 0 && col == 2) || (row == 2 && col == 0)) {
    return checkForSecondDiagonal(row, col, symbol);
  } else {
    return (
      checkForFirstDiagonal(row, col, symbol) ||
      checkForSecondDiagonal(row, col, symbol)
    );
  }
}

function checkForMatch(row, col, symbol) {
  if (
    (row == 0 && col == 0) ||
    (row == 2 && col == 0) ||
    (row == 0 && col == 2) ||
    (row == 2 && col == 2)
  ) {
    return (
      checkForRow(row, col, symbol) ||
      checkForCol(row, col, symbol) ||
      checkForDiagonal(row, col, symbol)
    );
  } else if (row == 1 && col == 1) {
    return (
      checkForRow(row, col, symbol) ||
      checkForCol(row, col, symbol) ||
      checkForDiagonal(row, col, symbol)
    );
  } else {
    return checkForRow(row, col, symbol) || checkForCol(row, col, symbol);
  }
}
function gameOver(status) {
  //console.log(status);
  var result = document.getElementById("result");
  if (numberOfPlacedObjects == 9 && status == false)
    result.innerText = "Match Draw";
  else {
    if (lastActiveSymbol == "X") result.innerText = "Player 1 wins";
    else if (lastActiveSymbol == "O") result.innerText = "Player 2 wins";
  }
  // removing listeners
  document.getElementById("c1").removeEventListener("click", placeSymbol);
  document.getElementById("c2").removeEventListener("click", placeSymbol);
  document.getElementById("c3").removeEventListener("click", placeSymbol);
  document.getElementById("c4").removeEventListener("click", placeSymbol);
  document.getElementById("c5").removeEventListener("click", placeSymbol);
  document.getElementById("c6").removeEventListener("click", placeSymbol);
  document.getElementById("c7").removeEventListener("click", placeSymbol);
  document.getElementById("c8").removeEventListener("click", placeSymbol);
  document.getElementById("c9").removeEventListener("click", placeSymbol);

  // updating gui

  console.log("gameOver");
}
function placeSymbol() {
  var row = this.dataset["row"];
  var col = this.dataset["col"];

  if (boardState[row][col] == "") {
    var symbol = findSymbol();
    boardState[row][col] = symbol;
    this.innerHTML = "<b>" + symbol + "</b>";
    numberOfPlacedObjects++;
    if (numberOfPlacedObjects >= 5) {
      let status = checkForMatch(row, col, symbol);
      console.log(numberOfPlacedObjects + status);
      if (status == true || numberOfPlacedObjects == 9) gameOver(status);
    }
  }
  // console.log(row);
  //console.log(col);
}
