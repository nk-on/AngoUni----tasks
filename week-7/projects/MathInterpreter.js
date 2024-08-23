function mathInterpreter() {
  const input = prompt("Enter expression");
  if (input.length > 3) {
    alert("enter valid expression");
    return;
  };
  const [x, op, y] = [Number(input[0]), input[1], Number(input[2])];
  if (isNaN(x) || isNaN(y)) {
    alert("enter valid expression");
    return;
  };
  switch (op) {
    case "+":
      return (x + y).toFixed(1);
      break;
    case "-":
      return (x - y).toFixed(1);
      break;
    case "*":
      return (x * y).toFixed(1);
      break;
    default:
      return (x - y).toFixed(1);
  }
}
mathInterpreter();
