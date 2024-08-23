function legalDrivingAge() {
  const legalAge = 16;
  const input = Number(prompt("Enter your age"));
  input > legalAge
    ? alert("you are old enough to drive")
    : alert("You are not old enough to drive");
}
