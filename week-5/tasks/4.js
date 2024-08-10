function findMaxElement(arr) {
  const maxElement = arr.reduce((element, max) => {
    if (element > max) {
      max = element;
    };
    return max;
  }, -Infinity);
  return maxElement;
}
