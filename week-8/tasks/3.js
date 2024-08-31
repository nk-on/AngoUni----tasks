function pushNum(num, arr, callback) {
  return callback(num, arr);
}
pushNum(3, [1, 2], (num, arr) => {
  arr.push(num);
  return arr;
});
