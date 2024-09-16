function nutritionFacts() {
  const fruitCalories = new Map([
    ["Apple", 130],
    ["Avocado", 50],
    ["Banana", 110],
    ["Cantaloupe", 50],
    ["Grapefruit", 60],
    ["Grapes", 90],
    ["Honeydew Melon", 50],
    ["Kiwifruit", 90],
    ["Lemon", 15],
    ["Lime", 20],
    ["Nectarine", 60],
    ["Orange", 80],
    ["Peach", 60],
    ["Pear", 100],
    ["Pineapple", 50],
    ["Plums", 70],
    ["Strawberries", 50],
    ["Sweet Cherries", 100],
    ["Tangerine", 50],
    ["Watermelon", 80],
  ]);
  let input = prompt("Enter fruit name please");
  //Making input's first letter uppercase in order to handle lowercase inputs
  input = input.split("");
  input[0] = input[0].toUpperCase();
  input = input.join("");
  if (!fruitCalories.has(input)) {
    alert("enter fruit name please");
    return;
  }
  alert(fruitCalories.get(input));
}
nutritionFacts();
