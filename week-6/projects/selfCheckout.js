function selfCheckout() {
  const items = [];
  for (let i = 0; i < 3; i++) {
    const price = Number(prompt("enter item price"));
    const amount = Number(prompt("enter item amount"));
    items.push({ price, amount });
  }
  const subTotal = items.reduce((total, element) => {
    return (total += element.price * element.amount);
  }, 0);
  const tax = (subTotal * 5.5) / 100;
  const totalPrice = subTotal + tax;
  alert(`total ${totalPrice}`);
  alert(`Tax ${tax}`);
  alert(`subtotal ${subTotal}`);
}
