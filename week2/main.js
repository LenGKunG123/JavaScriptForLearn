//Synchronous programming//
//interpreter translator//
// function greeting(someone) {
//     return 'hello ' + someone
// }

// let myName = "Nateetarn Likitwiwatphong"
// myName = 10 //weekly and dynamic data type

// console.log("starting...")
// //Asynchronous programming//
// setTimeout(()=>{
//     console.log("doing complex task...")
// }, 5000) //5 second
// console.log(greeting(myName))
// setTimeout(()=>{
//     console.log("simple task finish")
// }, 2000) //2 second
// console.log("Goodbye...")

// let msg = "I'm a teacher"
// console.log(msg)

let a = null
console.log(a)
let total
console.log(total)
if (total === undefined) console.log("variable dose not have initial value")
if (a === null) console.log("variable has null value")
if ('2' == 2) console.log(`'2'==2':${'2' == 2}`)
if ('2' == 2) console.log(`'2'==2':${'2' === 2}`)

//object sample
const obj = { id:1001 , name:'pen', price:100}
const obj2 = { id:2001}
// obj = obj2 //obj cannot change reference value

obj.id = 999 //but obj can update its properties



