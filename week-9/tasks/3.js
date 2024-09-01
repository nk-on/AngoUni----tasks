function divide(a, b) {
  if (!isNaN(a / b)) return a / b;
  throw new Error('invalid value');
}
try {
  console.log(divide(3,5));
} catch (error) {
  console.log(error);
}
