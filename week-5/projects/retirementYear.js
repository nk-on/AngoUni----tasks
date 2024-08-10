function retirementCalculator() {
  const age = Number(prompt('Enter your age'));
  const retirementAge = Number(prompt('When do you want to retire'));
  const date = new Date();
  const currentYear = date.getFullYear();
  const birthYear = currentYear - age;
  const retirementYear = birthYear + retirementAge;
  const yearsLeft = retirementYear - currentYear;
  alert(`${yearsLeft} years left before retirement`);
  alert(`It's ${currentYear} You will retire in ${retirementYear}`);
}
retirementCalculator();
