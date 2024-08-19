function compundInterest() {
  let principal = Number(prompt("Enter principal amount"));
  const interestRate = Number(prompt("Enter interest amount"));
  const years = Number(prompt("Enter years amount"));
  const compundPerYear = Number(
    prompt("Enter how much time is compounded per year")
  );
  const decimalRate = interestRate / 100;
  const result =
    principal *
    Math.pow(1 + decimalRate / compundPerYear, years * compundPerYear);
  return result.toFixed(2);
}
compundInterest();
