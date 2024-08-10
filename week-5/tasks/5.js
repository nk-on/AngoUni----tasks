function findMinElement(arr) {
  const minElement = arr.reduce((element, min) => {
    if (element < min) {
      min = element;
    }
    return min;
  }, Infinity);
  return minElement;
}
