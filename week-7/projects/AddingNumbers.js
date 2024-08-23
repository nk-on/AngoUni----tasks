function addingNumbers() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    const number = Number(prompt("Enter num"));
    total += number;
  }
  return total;
}
addingNumbers();
