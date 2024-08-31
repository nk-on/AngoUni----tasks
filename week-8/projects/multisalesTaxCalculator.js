function wisconsin(orderAmount, state) {
  const obj = {
    "eau claire": 0.4,
    dunn: 0.004,
  };
  const county = prompt("county where do you live").toLowerCase();
  if (obj[county] === undefined) {
    alert(`The total is ${orderAmount.toFixed(2)}`);
  } else {
    const tax = (orderAmount * obj[county]) / 100;
    const total = orderAmount + tax;
    alert(`Tax:${tax.toFixed(2)}`);
    alert(`The total is ${total.toFixed(2)}`);
  }
}
function illinois(orderAmount) {
  const tax = (orderAmount * 8) / 100;
  const total = orderAmount + tax;
  alert(`Tax:${tax}`);
  alert(`The total is ${total}`);
}
function multisalesTaxCalculator() {
  const orderAmount = Number(prompt("Enter order amount"));
  const state = prompt("state where do you live").toLowerCase();
  if (state === "wisconsin") {
    wisconsin(orderAmount, state);
    return;
  }
  if (state === "illinois") {
    illinois(orderAmount);
    return;
  }
  alert(`The total is ${orderAmount.toFixed(2)}`);
}
multisalesTaxCalculator();
