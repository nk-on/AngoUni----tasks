function missingNum(n) {
  const arr = [];
  const resultArray = [];
  const numbers = new Set();
  //Genereting numbers from 1 to n;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  //Genereting amount of numbers which should be genereted
  const skippedAmount = Math.floor(Math.random() * (arr.length - 1) + 1);
  let i = 0;
  while (i < skippedAmount) {
    let randomIndex = Math.floor(Math.random() * (arr.length - 1) + 1);
    //if numbers set has not randomIndex genereting randomIndex again untill it has not random Idx
    if (numbers.has(randomIndex)) {
      while (true) {
        randomIndex = Math.floor(Math.random() * (arr.length - 1) + 1);
        if (!numbers.has(randomIndex)) {
          numbers.add(randomIndex);
          i++;
          break;
        }
      }
    } else {
      numbers.add(randomIndex);
      i++;
    }
  }
  for (const value of numbers) {
    resultArray.push(arr[value]);
  }
  return resultArray.sort((a, b) => a - b);
}
missingNum(7);
