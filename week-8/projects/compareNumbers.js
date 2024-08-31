function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  if (c > b && c > a) {
    return c;
  }
}
function comparingNumbers() {
  const number1 = Number(prompt("Enter first number"));
  const number2 = Number(prompt("Enter second number"));
  const number3 = Number(prompt("Enter third number"));
  const numberSet = new Set([number1, number2, number3]);
  if (numberSet.size < 3) {
    alert("numbers should be different");
    return;
  }
  return findLargest(number1, number2, number3);
}
comparingNumbers();
