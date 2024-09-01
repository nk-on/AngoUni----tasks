function promptAge() {
  const age = Number(prompt('Enter your age'));
  if (!isNaN(age) && age > 0) return age;
  throw new Error('Invalid value');
}
function isAdult() {
  const age = promptAge();
  return age > 18 ? 'Adult' : 'Minor';
}
try {
  console.log(isAdult());
} catch (error) {
  console.log(error);
}
