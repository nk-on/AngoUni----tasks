async function fetchCatFacts() {
  const promise1 = fetch("https://catfact.ninja/fact");
  const promise2 = fetch("https://catfact.ninja/fact");
  Promise.race([promise1,promise2]).then((res)=>{
    return res.json();
  }).then(data => console.log(data));
}
fetchCatFacts();
