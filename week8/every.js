const names =['alice' , 'John' , 'Bob' , 'Ann']
// All start with a
const isStartWithLetterEvery = names.every(names => names.toLowerCase().startsWith('a'))
console.log(isStartWithLetterEvery);
// At least 1 start with a
const isStartWithLetterSome = names.some(names => names.toLowerCase().startsWith('a'))
console.log(isStartWithLetterSome);