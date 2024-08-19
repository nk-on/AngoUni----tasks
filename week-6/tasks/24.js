function removeFalse(arr) {
  return arr.filter((el) => el)
}
console.log(removeFalse([false, true, false, true, true]));
