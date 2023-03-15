function sumMix(x){
  let result = 0;
for (const i of x) {
  result += Number(i);
}
return result;
}

sumMix(['1',2,8,'-10', 0])



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump
};


console.log(zeroFuel(100, 50, 0))