function midStr(str) {
  if (str.length % 2 === 0) {
    return str[(str.length / 2) - 1] + str[str.length / 2]
  }
  return str[Math.floor(str.length / 2)];
}

console.log(midStr('middel'));
console.log(midStr('Tawhid'));

// function mdstr(str) {
//   return str.legth % 2 === 0 ? str[(str.length / 2) - 1] + str[str.length / 2] : str[Math.floor(str.length / 2)];
// }

// console.log(mdstr('Tawhid'));
// console.log(mdstr('middle'));