function sumArray(arr) {
  const sum = arr.reduce((element, total) => {
    return (element += total);
  }, 0);
  return sum;
}
function average(arr) {
  const sum = sumArray(arr);
  return sum / arr.length;
}
