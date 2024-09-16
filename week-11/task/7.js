class ArrayHelper {
  reverseArray(arr) {
    const resultArr = [];
    for (let i = arr.length - 1; i > 0; i--) {
      const element = arr[i];
      resultArr.push(element);
    }
    return resultArr;
  }
}
const arrHelper = new ArrayHelper();
console.log(arrHelper.reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
