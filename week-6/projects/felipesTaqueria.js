function makeInput() {
  const resultSet = new Set();
  while (true) {
    const input = prompt("Enter dish name");
    if (input === "-") return resultSet;
    resultSet.add(input.toLowerCase());
  }
}
function felipesTaqueria() {
  const obj = {
    "Baja Taco": 4.25,
    Burrito: 7.5,
    Bowl: 8.5,
    Nachos: 11.0,
    Quesadilla: 8.5,
    "Super Burrito": 8.5,
    "Super Quesadilla": 9.5,
    Taco: 3.0,
    "Tortilla Salad": 8.0,
  };
  const dishesSet = makeInput();
  let total = 0;
  for (let [key, value] of Object.entries(obj)) {
    key = key.toLowerCase();
    if (dishesSet.has(key)) {
      total += value;
    }
  }
  return total;
}
felipesTaqueria();
