// function doSomething(msg) {
//   return msg
// }
// console.log(doSomething('hello'))
// console.log(doSomething('hi'))
// console.log(doSomething('hey'))

// console.log(typeof doSomething)

//concat function
function concat(str1, str2) {
  return str1 + str2
}

//create function with function expression
const toUpper = function (str1) {
  return str1.toUpperCase()
}

//create function with named function exporeetion
const reverse = function rev(str1) {
  return [...str1].reverse().join('')
}

console.log(concat('js', 'beginner'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))

//doSomething is a higher order function because it accept  op function as its paramerters
// but not return function as a result
const doSomething = function (str1, op) {
  //op=toUpper , op= reverse
  return op(str1)
}
console.log(doSomething('hey', toUpper))
console.log(doSomething('Hey', reverse))

const doIt = function () {
  return concat
}
const x = doIt()
console.log(typeof x)
console.log(x('1', 'first'))
        