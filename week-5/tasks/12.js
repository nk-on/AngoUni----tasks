function mergeTwoSortedArrays(arr1, arr2) {
  const mergedArray = [];
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let i = (j = 0);
  // Pushing in the merged array one element from two array elements which is smallest
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    } else {
      mergedArray.push(arr1[i]);
      i++;
      j++;
    }
  };
  //In case some elements are left from one of two arrays push them to merged array
  if (i <= arr1.length - 1) {
    while (i <= arr1.length - 1) {
      mergedArray.push(arr1[i]);
      i++;
    }
  } else if (j <= arr1.length - 1) {
    while (j <= arr2.length - 1) {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
}
