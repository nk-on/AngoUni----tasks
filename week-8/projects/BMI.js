function BMI() {
  const weight = Number(prompt("Enter weight in pounds"));
  const height = Number(prompt("Enter height in inches"));
  if (isNaN(weight) || isNaN(height)) {
    alert("enter valid number");
    return;
  }
  if (weight <= 0 || height <= 0) {
    alert("enter positive number");
    return;
  }
  const BMI = (weight / (height * height)) * 703;
  return BMI;
}
BMI();
