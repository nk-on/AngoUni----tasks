function nameIsInvalid(variable, name) {
  if (name.length === 0) {
    alert(`${variable} must be filled`);
    return true;
  }
  if (name.length < 2) {
    alert(`${variable} is too short`);
    return true;
  }
  return false;
}
function zipIsInvalid(zipCode) {
  if (isNaN(zipCode)) {
    alert("Zip code is invalid");
    return true;
  }
}
function idIsInvalid(id) {
  const regex = /^[A-Za-z]{2}-\d{4}$/;
  if (!regex.test(id)) {
    alert("invalid id");
    return true;
  }
}
function validateInput() {
  const firstName = prompt("enter your first name");
  const lastName = prompt("enter your last name");
  const zipCode = Number(prompt("Enter ZIP code"));
  const employeeID = prompt("employee ID");
  const [invalidName, invalidLastName] = [
    nameIsInvalid("firstName", firstName),
    nameIsInvalid("lastName", lastName),
  ];
  const invalidZipCode = zipIsInvalid(zipCode);
  const invalidEmployeeID = idIsInvalid(employeeID);
  if (invalidName || invalidLastName) {
    return;
  }
  if (invalidZipCode) {
    return;
  }
  if (invalidEmployeeID) {
    return;
  }
  alert("no Error found");
}
validateInput();
