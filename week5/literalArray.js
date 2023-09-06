//create array โดยให้ค่า(literal) --> []
//initial x with empty array
const x = []
console.log(typeof x)

if (x.length === 0) console.log('empty array')
else console.log('not empty array')
console.log(x[0])
// x[index]
x[0] = 1
x[1] = 3
x[2] = 5

x.push(7) // push() auto add element at last position of array
x.push(9)
console.log(x) //[1,3,5,7,9]

const y = [1, true, 'beginner', 2.5]
console.log(y)
console.log(y[0]) // 1
console.log(y[y.length - 1]) // 2.5
console.log(y.length) // 4
