const names = ['John', 'Josh', 'Luke', 'John'];
function countNames() {
  const obj = {};
  names.forEach((name) => {
    obj.hasOwnProperty(name) ? (obj[name] = obj[name] + 1) : (obj[name] = 1);
  });
  return obj;
}
console.log(countNames());
