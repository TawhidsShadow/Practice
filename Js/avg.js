function findAverage(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum === 0 ? 0 : sum / array.length;
}

console.log(findAverage([2,-2,6]))