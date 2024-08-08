function littleProffesor() {
  let level = Number(prompt("Enter level"));
  //set range based on user's input if 1 range will be from 1 to 10 if 2 from 20 to 30 and so on
  let range = setRange(level);
  let i = 0;
  while (i < 10) {
    const [min, max] = [range[0], range[1]];
    let firstNum = Math.floor(Math.random() * (max - min) + min);
    let secondNum = Math.floor(Math.random() * (max - min) + min);
    let answer = Number(prompt(`${firstNum}+${secondNum}`));
    const result = firstNum + secondNum;
    if (result !== answer) {
      handleMistake(answer, result, firstNum, secondNum);
    }
    i++;
  }
}
function setRange(level) {
  //if level is not valid asking user same question
  //create second variable first operand and second one based on random numbers between range
  //asking user 10 times to input answer to question
  if (level > 10 || level < 1) {
    while (true) {
      level = Number(prompt("Enter level"));
      if (level < 10 && level > 1) {
        break;
      }
    }
  }
  return [1, level * 10];
}
function handleMistake(answer, result, firstNum, secondNum) {
  let mistakes = 1;
  //program should output EEE and repeat prompt if answer is incorrect untill 3 mistakes
  while (mistakes < 3) {
    alert("EEE");
    answer = Number(prompt(`${firstNum}+${secondNum}`));
    if (answer === result) {
      break;
    }
    mistakes++;
  }
  if (mistakes === 3) {
    alert(result);
    return;
  }
}
littleProffesor();
