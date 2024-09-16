class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return (this.radius * Math.PI ** 2).toFixed(2);
  }
  getLength() {
    return (2 * (this.radius * Math.PI)).toFixed(2);
  }
  createCircle(r){
    return new Circle(r)
  };
};
const circle = new Circle(5);
circle.getArea();
circle.getLength();
console.log(circle.createCircle(67));
