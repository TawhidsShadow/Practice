function whoLikes (persons) {
  switch (persons.length) {
    case 0:
      return 'No one liked.'
    case 1:
      return `${persons[0]} liked.`
    case 2:
      return `${persons[0]} and ${persons[1]} liked.`
    case 3:
      return `${persons[0]}, ${persons[1]} and ${persons[2]} liked.`
    default:
      return `${persons[0]}, ${persons[1]} and ${persons.length - 2} other liked.`
  }
}

console.log(whoLikes(['Tawhid','Nur', 'Arora', 'Jui']));
console.log(whoLikes(['Tawhid','Nur', 'Arora']));
console.log(whoLikes(['Tawhid', 'X']));
console.log(whoLikes(['Tawhid']));
console.log(whoLikes([]));

