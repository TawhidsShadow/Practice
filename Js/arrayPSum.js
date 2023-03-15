function arrayPSum (nums) {
  let total = 0;
  for (let num of nums) {
    num > 0 ? total += num : 0;
  }
  return total;
}

console.log(arrayPSum([1,2,3,4]))