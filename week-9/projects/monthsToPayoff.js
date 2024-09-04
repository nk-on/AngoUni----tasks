"use strict";
function countMonthsUntillPayOff(balance, APR, monthlyPayment) {
  const monthlyInterest = APR / 12 / 100;
  const numerator = Math.log(1 - (balance * monthlyInterest) / monthlyPayment);
  const denominator = Math.log(1 + monthlyInterest);
  const months = -numerator / denominator;
  return Math.ceil(months);
}
function monthsToPayOff() {
  const balance = Number(prompt("Enter balance"));
  const APR = Number(prompt("Enter APR"));
  const monthlyPayment = Number(prompt("How much you can pay per month"));
  return countMonthsUntillPayOff(balance, APR, monthlyPayment);
}
monthsToPayOff();
