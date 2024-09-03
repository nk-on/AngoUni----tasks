async function fetchCatFacts() {
  const promise1 = fetch("https://catfact.ninja/fact");
  const promise2 = fetch("https://catfact.ninja/fact");
  const promises = Promise.all([promise1,promise2].map(promise => promise.then(response => response.json())));
  return promises.then(data => console.log(data));
};
console.log(fetchCatFacts());
