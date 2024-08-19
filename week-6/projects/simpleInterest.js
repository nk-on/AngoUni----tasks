function simpleInterest() {
  const principal = Number(prompt("Enter number of principal"));
  const intrestRate = Number(prompt("Enter rate"));
  const years = Number(prompt("Enter number of years"));
  const interest = (principal * intrestRate) / 100;
  const totalInterest = interest * years;
  const result = principal + totalInterest;
  return result;
}
simpleInterest();
