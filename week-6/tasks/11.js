function sortAlphabetically(users) {
  return users.sort((a, b) =>  a.name.localeCompare(b.name));
}
console.log(sortAlphabetically([{name:"bob"},{name:'alex'},{name:'jack'}]));