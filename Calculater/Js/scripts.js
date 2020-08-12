window.addEventListener("load", initialSetup);
/*
function checkValidityOfExpression(input) {
  let str = input.split("");
  for (ch in str) {
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) return false;
  }
  return true;
}
*/
function inputExpression(input) {
  document.getElementById("expressionBox").value += input;
  console.log(input);
}
function initialSetup() {
  var btns = document.getElementsByClassName("inputs");
  console.log("initial setup....");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      inputExpression(this.innerText);
    });
  }

  let inputBox = document.getElementById("expressionBox");
  inputBox.addEventListener("keypress", function () {
    console.log(event.key);
    event.preventDefault();
    if (
      (event.key >= "0" && event.key <= "9") ||
      event.key == "+" ||
      event.key == "-" ||
      event.key == "(" ||
      event.key == ")" ||
      event.key == "*" ||
      event.key == "/" ||
      event.key == "."
    ) {
      inputBox.value += event.key;
    }
  });
  document
    .getElementById("clearBtn")
    .addEventListener("click", clearExpression);
  document
    .getElementById("evaluateBtn")
    .addEventListener("click", evaluateExpression);
}
function clearExpression() {
  document.getElementById("expressionBox").value = "";
}
function evaluateExpression() {
  let expression = document.getElementById("expressionBox").value;
  console.log(expression);
  result = "";
  try {
    result = eval(expression);
  } catch (Exception) {
    alert("Invalid Expression");
  }
  document.getElementById("expressionBox").value = result;
}
