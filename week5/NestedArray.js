//nested array
const z = [
  [2, 4, 6],
  [true, false],
  ['a', 'b', 'c'],
]
console.log(z[0]) // [2,4,6]
console.log(z[z.length - 1]) // [a,b,c]
console.log(z.length) // 3

const m = [
  { productid: 1, name: 'pen', price: 30 },
  { productid: 2, name: 'notebook', price: 100 },
  { productid: 3, name: 'pencil', price: 10 },
]
console.log(m.length)
console.log(m[m.length - 1])
console.log(m[0])

const n = { productid: [1001, 1002, 1003], productPrice: [100, 10, 15] }
console.log(n.productid)
console.log(n.productPrice)
