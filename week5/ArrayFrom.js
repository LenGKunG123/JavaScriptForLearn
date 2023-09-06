//const array with Array.From()
const t = [1, 3, 5]
const k = [2, 4, 6]
const l = Array.from(t)
console.log(l)
//compare with spread operator
const kk = [...t, ...k]
console.log(kk)
