Array.prototype.sum = function () {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    total += element;
  }
  return total;
};
let arr = [2, 3, 4, 7];
console.log(arr.sum());
