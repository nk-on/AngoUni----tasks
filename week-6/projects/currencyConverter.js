function currencyConverter() {
  const euroAmount = Number(prompt("Enter euro amount"));
  const rate = Number(prompt("Enter rate exchange rate"));
  const rateFrom = 100;
  const result = ((euroAmount * rate) / rateFrom).toFixed(2);
  alert(`${euroAmount} euro is ${result} dollars at exchange rate of ${rate}`);
}
currencyConverter();
