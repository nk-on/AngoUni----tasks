const promise = new Promise(function (resolve, reject) {
  const age = 15;
  if (age > 18) {
    setTimeout(resolve, 3000);
  } else {
    setTimeout(reject, 300);
  }
});
promise.then(
  () => {
    console.log("You are welcome");
  },
  () => {
    console.log("You are minor");
  }
);
