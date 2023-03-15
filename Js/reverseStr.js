function reverse(str) {
  let array = str.split('')
  let result = '';
for (let i=array.length-1; i>-1; i--){
  result = result + array[i];
}
console.log(result)
}

reverse('panda')