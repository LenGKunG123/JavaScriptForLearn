// x = 1
// if (x === 1) {
//   let x = 'unknown'
//   console.log(x)
// }
// console.log(x)

// // let y = x === 1 ? Math.random()*2+3/5 : 0
// console.log(x === 2 ? 2 : 0)

// let m = 1

// // optional Chaining //
// console.log(m == null ? 'error' : 'go next page')
// console.log

// // nullish //
// let n = m ?? 0 // if m !== null && !== undifined return m
// console.log(n)

// let y = [] //array initialization with empty array
// let z = {} //object initialization with no property
// console.log(typeof y) // empty array not null or undifined
// console.log(typeof z) // empty object not null or undifined

// let a = [1,3,5,7]
// a = a ?? y
// console.log(a)

// let f = Math.round(Math.random() * (100 - 25) + 25)
// console.log(f)

// n1 = 25
// n2 = 100

// function randomNumber(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min

// }

// let str1 = 'ant'
// let str2 = 'Ant'
// let str3 = 'ANT'
// let str4 = 'ant'

// console.log(str1 === str2)
// console.log(str1 === str3)
// console.log(str2 === str3)
// console.log(str1 === str4)
// console.log(str1 < str2)
// console.log(str3 < str1)    


let x = [1,3,true,'unknown']
let y = [1,3,true,'unknown']
let z = x

console.log(x === y) //object memory address x === address y
console.log(x === z) //object memory address x === address x

//object data type
let m = {id :1 , title:'pen'}
let n = {id : 1 , title:'pen'}
let o = n

console.log(m === n) //object memory address x === address y
console.log(o === n) //object memory address x === address x

