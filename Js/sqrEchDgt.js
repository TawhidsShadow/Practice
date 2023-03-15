function squireDigit(num) {
  let str = num.toString().split('');
  let squiredNum = '';
  for (let i=0; i<str.length; i++) {
    squiredNum += (Math.pow(Number(str[i]),2))
  }
  return (Number(squiredNum));
}

console.log(squireDigit(22100))
console.log(squireDigit(389))
