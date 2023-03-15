function vowelCount(string) {
  const vowels = 'aeiouAEIOU';
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    // console.log(vowels[i])
    if (vowels.includes(string[i])) {
      console.log(string[i]);
      counter ++;
    }
  }
  return counter;
}

console.log(vowelCount('MD. Tawhid Hossain'));





function vowelCounts(string) {
  const vowels = 'AEIOU';
  let counter = 0;
  for (let elm of string) {
    if (vowels.includes(elm.toUpperCase())) {
      console.log(elm);
      counter ++;
    }
  }
  return counter;
}

console.log(vowelCounts('Kakashi Hatake'));