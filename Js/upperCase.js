function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function upperCase (sent) {
  let result = [];
  let words = sent.split(" ");
for (let word of words) {
  result.push(capitalize(word));
}
return result.join(" ");
}

console.log(upperCase('hello how are you'));