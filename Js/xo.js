function xo (str) {
  let oCount = 0;
  let xCount = 0;
  for(let i=0; i<str.length; i++) {
    str[i] === 'x' || str[i] === 'X' ? xCount ++ : 0;
    str[i] === 'o' || str[i] === 'O' ? oCount ++ : 0;
  }

  if (oCount === xCount) {
    return 'true';
  } else if (oCount === 0 && xCount === 0){
    return 'True';
  }
  return 'false';
}

console.log(xo('Xxxzzz'))
console.log(xo('XxxOoo'))
console.log(xo('xxoo'))
console.log(xo('akdfjh'))