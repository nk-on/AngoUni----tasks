async function fetchCatFacts() {
  const promise1 = fetch("https://catfact.ninja/fact").then(response => response.json());
  const promise2 = fetch("https://catfact.ninja/fact").then(response => response.json());
  return Promise.all([promise1,promise2]).then((data)=> console.log(data))
};
console.log(fetchCatFacts());
