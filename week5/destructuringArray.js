const nums = [1, 3, 5, 7, 9]

//destructuring
const [a, b, c] = nums // a=1 ,b=3 , c=5
console.log(a)
console.log(b)
console.log(c)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

const [x] = nums
console.log(x)

const [, , , y, , ...z] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(y)
console.log(z)

const [...m] = nums
console.log(m)
//const nums = [1,3,5,7,9]
const n = nums
n[0] = 999
console.log(nums)
console.log(n)
// all below are destructuring
const [o] = nums
const [, p] = nums
const [...q] = nums
console.log(o)
console.log(p)
console.log(q)
