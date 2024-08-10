function countElements(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!obj.hasOwnProperty(element)) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  }
  return obj;
}
function getCommonElements(arr1, arr2) {
  const commonElements = [];
  //Count occurenct of each element in both arr 1 and arr 2ß
  const amountOfelements1 = countElements(arr1, {});
  const amountOfelements2 = countElements(arr2, {});
  /*if there are matched entries in both objects where we count elements and there occurences
   put matched elements in commonElements array
  */
  for (let key of Object.keys(amountOfelements1)) {
    if (amountOfelements2.hasOwnProperty(key)) {
      commonElements.push(key);
    }
  }
  return commonElements;
}
