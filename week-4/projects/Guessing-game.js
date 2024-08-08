function selectingRange(level) {
  if (level > 10 || level < 1) {
    while (true) {
      level = Number(prompt("Enter difficulty level"));
      if (level < 10 || level > 1) {
        break;
      }
    }
  }
  return [1, level * 10];
}
function guessingGame() {
  let level = Number(prompt("Enter difficulty level"));
  const range = selectingRange(level);
  if (range === undefined) return;
  const [min, max] = [range[0], range[1]];
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  let guessedNum = Number(prompt("Enter random number"));
  while (true) {
    if (guessedNum > randomNumber) {
      alert("Too large");
    } else if (guessedNum < randomNumber) {
      alert("Too small");
    } else if (guessedNum === randomNumber) {
      alert("Just right");
      return;
    } else {
      alert("Enter a valid number");
      return;
    }
    guessedNum = Number(prompt("Enter guessed number"));
  }
}
guessingGame();
