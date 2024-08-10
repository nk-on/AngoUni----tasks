function countEl(arr, target) {
  const result = arr.reduce((total, element) => {
    if (element === target) {
      total++;
    }
    return total;
  }, 0);
  return result;
};
