function objectTransformation(objArray) {
  const resultObj = {};
  for (let i = 0; i < objArray.length; i++) {
    const obj = objArray[i];
    resultObj[obj.id] = obj.name;
  }
  return resultObj;
}
