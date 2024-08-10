function simpleMath() {
  let a = Number(prompt('Enter firstNum'));
  let b = Number(prompt('Enter secondNum'));
  if (isNaN(a) || isNaN(b)) {
    console.log('i work');
    while (isNaN(a) || isNaN(b)) {
      a = Number(prompt('Enter firstNum'));
      b = Number(prompt('Enter secondNum'));
    }
  }
  const operations = ['+', '-', '*', '/'];
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    let res;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      default:
        res = a / b;
    }
    console.log(`${a}${operation}${b}=${res}`);
  };
}
