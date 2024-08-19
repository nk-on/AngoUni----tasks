function countNameOccurrences(arr) {
  const result = arr.reduce((obj, element) => {
    obj.hasOwnProperty(element)
      ? (obj[element] = obj[element] + 1)
      : (obj[element] = 1);
    return obj;
  }, {});
  return result;
}
