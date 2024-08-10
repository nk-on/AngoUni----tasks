function sortArr(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  return sortedArr;
}
sortArr([4, 5, 2, 3]);
