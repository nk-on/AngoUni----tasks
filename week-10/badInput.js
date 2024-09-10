function badInput(input) {
  if (isNaN(input) || input == 0) {
    return true;
  }
  return false;
}
function handelingBadInput() {
  let input = Number(prompt("What is rate of return"));
  while (badInput(input)) {
    input = Number(prompt("What is rate of return"));
  }
  const ror = 72 / input;
  alert(`it will take ${ror} years to double your initial investment`);
}
