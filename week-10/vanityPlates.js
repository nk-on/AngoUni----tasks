function firstNumberIsZero(plate) {
  const regex = /^[0-9]$/;
  let count = 0;
  for (let i = 0; i < plate.length; i++) {
    const element = plate[i];
    if (regex.test(element) && count === 0) {
      return false;
    }
    count++;
  }
  return true;
}
function vanityPlates() {
  const plate = prompt("Plate:").split("");
  //check if first two elements are letters
  const regexLetters = /^[a-zA-Z]$/;
  const regexSymbol = /^[^a-zA-Z0-9]$/;
  if (!regexLetters.test(plate[0]) || !regexLetters.test(plate[1])) {
    alert("invalid");
    return;
  }
  if (plate.length < 2 || plate.length > 6) {
    alert("invalid");
    return;
  }
  if (regexLetters.test(plate[plate.length - 1])) {
    alert("invalid");
    return;
  }
  if (firstNumberIsZero(plate)) {
    alert("invalid");
    return;
  }
  if (plate.includes(" ") || regexSymbol.test(plate.join(""))) {
    alert("invalid");
    return;
  }
}
vanityPlates();
