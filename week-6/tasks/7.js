function sumArr(arr) {
  const result = arr.reduce((el, sum) => el + sum);
  return result;
}
console.log(sumArr([1,2,3,4,5]))
