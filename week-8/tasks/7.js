const promise = new Promise(function (resolve, reject) {
  const sucess = !true;
  if (sucess) {
    setTimeout(resolve, 1000);
  } else {
    reject();
  }
});
promise
  .then(() => {
    console.log("congrats !");
  })
  .then(() => {
    setTimeout(() => console.log("congrats !!"), 1000);
  })
  .then(() => {
    setTimeout(() => console.log("congrats !!!"), 1000);
  });
