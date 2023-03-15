function century(year) {
  let century = 0;
  for(i=0; i<year; i += 100) {
    century ++;
  }
  return `${century} Century`;
}

console.log(century(2023));
console.log(century(100));
console.log(century(32000));

