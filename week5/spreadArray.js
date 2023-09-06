//spread operator
const a = [1, 2, 3]
const b = [0, ...a, 4] // [0,1,2,3,4]

console.log(a)
console.log(b)

const c = 'HELLO LENGKUNG'
const d = [...c]

console.log(c)
console.log(d)

for (const ch of d) {
  console.log(ch)
}
for (const value of a) {
  console.log(value)
}
