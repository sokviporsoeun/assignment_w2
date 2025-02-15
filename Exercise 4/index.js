const passwordView = document.getElementById('passwordView');
const lostView = document.getElementById('lostView');
const wonView = document.getElementById('wonView');
const checkButton = document.getElementById('checkButton');
const tryAgainButton = document.getElementById('tryAgainButton');
const passwordInput = document.getElementById('passwordInput');

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

hide(lostView);
hide(wonView);

const secretCode = "1234"; 
let attemptsLeft = 3;
checkButton.addEventListener('click', () => {
  const enteredCode = passwordInput.value;
  if (enteredCode === secretCode) {
    hide(passwordView);
    hide(lostView);
    show(wonView);
  } else {
    attemptsLeft--;
      instructionLabel.textContent = "Enter your code (" + attemptsLeft + "chances left!)";
  }
  passwordInput.value = '';
});

tryAgainButton.addEventListener('click', () => {
  attemptsLeft = 3;
  hide(lostView);
  hide(wonView);
  show(passwordView);
  instructionLabel.textContent = "Enter your code (You can try 3 times only !)";
});