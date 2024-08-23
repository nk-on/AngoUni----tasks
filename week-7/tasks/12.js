function compareTwo(obj1, obj2) {
  const [objectKeys1, objectKeys2] = [Object.keys(obj1), Object.keys(obj2)];
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  let i = (j = 0);
  while (i < objectKeys1.length) {
    const [key1, key2] = [objectKeys1[i], objectKeys2[j]];
    const [value1, value2] = [obj1[key1], obj2[key2]];
    if (typeof value1 === "object") {
      return compareTwo(value1, value2);
    }
    if (value1 !== value2) {
      return false;
    }
    i++;
    j++;
  }
  return true;
}
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(compareTwo(obj1, obj2));
