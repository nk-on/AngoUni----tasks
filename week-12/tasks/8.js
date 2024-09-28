function commonPrefixes(arr) {
  let subString = arr[0];
  let matched = true;
  while (subString.length > 0) {
    arr.forEach((word) => {
      if (!word.includes(subString)) {
        matched = false;
      }
    });
    if (matched === true) {
      return subString;
    } else {
      subString = subString.split("");
      subString.pop();
      subString = subString.join("");
      matched = true;
    }
  }
  return [];
}
