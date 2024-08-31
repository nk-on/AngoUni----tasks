function bloodAlcoholCalculator() {
  const weight = Number(prompt("Enter your weight"));
  const cups = Number(prompt("Enter amount of cups"));
  const gender = prompt("Enter your gender").toLowerCase();
  const hours = Number(prompt("Enter hours passed from last cup"));
  if (gender !== "male" && gender !== "female") {
    alert("Enter valid gender");
    return;
  }
  const ratio = gender === "female" ? 0.66 : 0.73;
  const BAC = (cups * 5.14) / (weight * ratio) - 0.015 * hours;
  if (BAC >= 0.08) {
    alert("it's not legal to drive");
  } else {
    alert("it's  legal to drive");
  }
}
