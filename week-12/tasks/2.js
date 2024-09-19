function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function primeNumberGenerator(num1, num2) {
  const arr = [];
  while (num1 <= num2) {
    if (isPrime(num1)) {
      arr.push(num1);
    }
    num1++;
  }
  return arr;
}
primeNumberGenerator(5, 1001);
