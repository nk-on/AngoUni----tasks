function capitalizeWords(str) {
  str = str.split(" ");
  str = str.map((element) => {
    element = element.split("");
    element[0] = element[0].toUpperCase();
    element = element.join("");
    return element;
  });
  return str;
}
capitalizeWords("when in doubt, listen to your cheese");
