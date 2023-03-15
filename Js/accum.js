function repCap(letters, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    // if(i === 0) {
    //   result += letters.toUpperCase()
    // } else {
    //   result += letters.toLowerCase()
    // }
    result += i===0 ? letters.toUpperCase() : letters.toLowerCase();
  }
  return result;
}
// console.log(repCap('a', 3))

function accum (str) {
let result = [];
let letters = str.split('')
let counter = 1;
for (const letter of letters) {
  result.push(repCap(letter, counter))
  counter ++;
}
return result.join('-');
}

console.log(accum('abcd'));
console.log(accum('TaWhid'));
console.log(accum('ADjfklLKSDH'));

