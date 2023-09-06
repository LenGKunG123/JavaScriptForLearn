const x = [...'Hello World']
console.log(x)

for (const [index, value] of x.entries()) {
  console.log(value)
  console.log(index)
}
