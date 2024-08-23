function passwordValidation() {
  let password = "abc$123";
  const name = prompt("Enter your name");
  const enteredPassword = prompt("enter your password");
  if (password === enteredPassword) {
    alert(`Welcome ${name}`);
  } else {
    alert("I dont know you");
  }
}
passwordValidation();
