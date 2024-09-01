function parseObj(obj) {
  return JSON.parse(obj);
}
try {
  console.log(parseObj('{"result":true, "count":42}'));
} catch (error) {
  console.log(error);
}
