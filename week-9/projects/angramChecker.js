function count(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  return map;
}
function compare(map1, map2) {
  for (let i of map1.keys()) {
    if (map1.get(i) !== map2.get(i)) {
      return false;
    }
    return true;
  }
}
function isAngram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.split('').join('');
  str2 = str2.split('').join('');
  const occurences1 = count(str1);
  const occurences2 = count(str2);
  return compare(occurences1, occurences2);
}
isAngram('teacher', 'cheater');
