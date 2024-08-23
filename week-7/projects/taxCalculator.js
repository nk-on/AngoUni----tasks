function taxCalculator() {
  const orderAmount = Number(prompt("what is order amount"));
  const state = prompt("what is your state");
  if (state === "WI") {
    let tax = (orderAmount * 5.5) / 100;
    alert(`tax:${tax.toFixed(2)}`);
    alert(`total:${(orderAmount + tax).toFixed(2)}`);
  } else {
    alert(`total:${orderAmount.toFixed(2)}`);
  }
}
taxCalculator();
