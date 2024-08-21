function Product(price) {
  (this.price = price),
    (this.showPrice = function () {
      return this.price;
    });
}
function Basket() {
  this.backet = [];
  (this.add = function (product) {
    this.backet.push(product);
  }),
    (this.countPrice = function () {
      let totalPrice = 0;
      this.backet.forEach((el) => {
        totalPrice += el.price;
      });
      return totalPrice
    });
}
const butter = new Product(34);
const bread = new Product(2);
const cheese = new Product(9);
console.log(butter.showPrice());
const basket = new Basket();
basket.add(butter);
basket.add(bread);
basket.add(cheese)
console.log(basket.countPrice());
