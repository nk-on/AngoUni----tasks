function count() {
  const targetNum = Number(prompt("Enter your target number"));
  if (targetNum <= 0) {
    alert("Enter valid num");
    return;
  }
  for (let i = 0; i < targetNum; i++) {
    setTimeout(() => console.log(i), 1000 * i);
  }
}
count();
