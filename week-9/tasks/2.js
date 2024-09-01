function hasName(obj) {
  if (obj.name) return obj.name;
  throw new Error('Invalid value');
}
const obj = { name: 'John Doe' };
try {
  console.log(hasName(obj));
} catch (error) {
  console.log(error);
}
