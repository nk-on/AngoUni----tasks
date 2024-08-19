function checkSomeAge(arr) {
  return arr.some((el) => {
    return el.age < 18;
  });
}
