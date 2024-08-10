function sumArr(arr) {
  const sum = arr.reduce((element, total) => {
    return (element += total);
  }, 0);
  return sum;
};
