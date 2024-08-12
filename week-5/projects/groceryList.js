function countElements(arr) {
  const obj = {};
  arr.forEach((el) => {
    obj.hasOwnProperty(el) ? (obj[el] = obj[el] + 1) : (obj[el] = 1);
  });
  return obj;
}
function grocceryList() {
  const itemList = [];
  while (true) {
    const item = prompt("Enter item");
    if (item === "-") {
      break;
    }
    itemList.push(item);
  }
  itemList.sort((a, b) => {
    return a.localeCompare(b);
  });
  const obj = countElements(itemList);
  for (const [key, value] of Object.entries(obj)) {
    console.log(value, key);
  }
}
grocceryList();
