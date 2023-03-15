function max (numArray) {
  let max = numArray[0];
  for (i=0; i<numArray.length; i++) {
    if (numArray[i] >= max) {
      max = numArray[i];
    }
  }
  return max;
}

function min (numArray) {
  let min = numArray[0];
  for (let num of numArray) {
    num <= min ? min = num : 0;
  }
  return min;
}

function minMax (numArray) {
  return `min= ${min(numArray)} \nmax= ${max (numArray)}`;
}

console.log(minMax([-5,-7,-8,10]));