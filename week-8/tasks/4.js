const promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000);
});
promise.then(() => {
  console.log("Resolved");
});
