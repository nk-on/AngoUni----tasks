const promise = new Promise(function (resolve, reject) {
  const success = true;
  if (success) {
    resolve(2);
  }
});
promise
  .then((a) => {
    return a;
  })
  .then((a) => {
    return a * 2;
  });
