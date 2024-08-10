function evaluateGrade() {
  let grade = Number(prompt('Enter grade'));
  if (grade < 0 || grade > 100) {
    alert('enter right number');
    while (grade < 0 || grade > 100) {
      grade = Number(prompt('Enter grade'));
    }
  }
  if (grade >= 0 && grade <= 59) {
    alert('F');
    return;
  }
  if (grade >= 60 && grade <= 69) {
    alert('D');
    return;
  }
  if (grade >= 70 && grade <= 79) {
    alert('C');
    return;
  }
  if (grade >= 80 && grade <= 89) {
    alert('B');
    return;
  }
  if (grade >= 90 && grade <= 100) {
    alert('A');
    return;
  }
}
evaluateGrade();
