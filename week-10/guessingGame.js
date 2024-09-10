function guessingGame() {
  const difficulty = Number(prompt("Enter difficulty"));
  if (isNaN(difficulty) || difficulty > 3 || difficulty < 1) {
    alert("enter valid number");
    return;
  }
  let range;
  switch (difficulty) {
    case 1:
      range = [1, 10];
      break;
    case 2:
      range = [1, 100];
      break;
    default:
      range = [1, 1000];
  }
  const min = range[0];
  const max = range[1];
  const randNum = Math.floor(Math.random() * (max - min + 1) + min);
  let guessedNum = Number(prompt("Enter number"));
  let count = 0;
  while (guessedNum !== randNum) {
    count++;
    if (guessedNum < randNum) {
      alert("to low");
    } else if (guessedNum > randNum) {
      alert("to high");
    } else {
      alert(`you guessed it in ${count} guesses`);
      break;
    }
    guessedNum = Number(prompt("Enter number"));
  }
  const playAgain = prompt("do you want to play again");
  if (playAgain === "y") {
    guessingGame();
  } else if (playAgain === "n") {
    alert("Goodbye !");
    return;
  } else {
    alert("enter valid num");
    return;
  }
}
guessingGame();
