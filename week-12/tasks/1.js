function countCharacters(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    //if maphas not element set element => 1
    //otherwise increase existing value by 1
    const element = str[i].toLowerCase();
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }
  return map;
}
function angramChecker(str1, str2) {
  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");
  const map1 = countCharacters(str1);
  const map2 = countCharacters(str2);
  //loop through map1
  console.log(map1, map2);
  for (const key of map1.keys()) {
    if (!map2.has(key)) {
      return false;
    }
    if (map1.get(key) !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
angramChecker("dormitory", "	dormitory ");
