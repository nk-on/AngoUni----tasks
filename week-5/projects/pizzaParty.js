function validate(num) {
  while (num <= 0) {
    num = Number(prompt("Enter valid number"));
  }
  return num;
}
function pizzaParty() {
  let numberOfPeople = Number(prompt("Enter number of people"));
  if (numberOfPeople <= 0) {
    numberOfPeople = validate(numberOfPeople);
  }
  let pizzas = Number(prompt(`Enter number of pizzas`));
  if (pizzas <= 0) {
    pizzas = validate(pizzas);
  }
  const slices = Number(prompt("Enter number of slices"));
  if (slices <= 0) {
    slices = validate(slices);
  }
  pizzas === 1
    ? alert(`You have ${numberOfPeople} people and ${pizzas} pizza`)
    : alert(`You have ${numberOfPeople} people and ${pizzas} pizzas`);

  const totalSlices = pizzas * slices;
  const slicesOnPerson = Math.floor(totalSlices / numberOfPeople);
  const leftOvers = totalSlices % numberOfPeople;
  alert(`Each person gets ${slicesOnPerson} leftovers:${numberOfPeople}`);
}
pizzaParty();
