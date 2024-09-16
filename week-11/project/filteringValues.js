function filteringValues() {
  let input = prompt("Enter numbers please ");
  input = input.split(" ");
  input = input.map((element) => (element = Number(element)));
  return input.filter((element) => element % 2 === 0);
}
filteringValues();
