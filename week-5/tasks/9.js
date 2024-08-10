function findEven(arr) {
  const result = arr.reduce((total, element) => {
    if (element % 2 === 0) {
      total += element;
    }
  }, 0);
  return result;
}
