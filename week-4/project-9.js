function littleProffesor() {
  let level = Number(prompt("Enter level"));
  //set range based on user's input if 1 range will be from 1 to 10 if 2 from 20 to 30 and so on
  let range = setRange(level);
  //if level is not valid asking user same question
  if (range === undefined) {
    while (true) {
      level = Number(prompt("Enter level"));
      range = setRange(level);
      if (range !== undefined) {
        break;
      }
    }
  }
  //create second variable first operand and second one based on random numbers between range
  //asking user 10 times to input answer to question
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
  switch (level) {
    case 1:
      return [1, 10];
    case 2:
      return [10, 20];
    case 3:
      return [30, 40];
    case 4:
      return [40, 50];
    default:
      return undefined;
  }
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
