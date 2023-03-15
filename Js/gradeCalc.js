let grade = gradeCalc(100);

function gradeCalc(totalNum) {
  if (totalNum >100) {
    return 'Invalid Number';
  } else if (totalNum >= 90) {
    return 'A';
  } else if (totalNum >= 80){
    return 'B';
  } else if (totalNum >= 70) {
    return 'C';
  } else if (totalNum >= 60) {
    return 'D';
  } else if (totalNum >= 40) {
    return 'E';
  } else {
    return 'Fail'
  }
}

console.log(gradeCalc(700));
console.log(gradeCalc(70));
console.log(grade);