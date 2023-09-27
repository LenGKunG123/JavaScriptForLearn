const array = [1, 2, 3, 4, 5]
function Warmup(array) {
  let max = Math.max.apply(Math, array)
  let min = Math.min.apply(Math, array)
  let sum = 0
  let avg = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  avg = sum / array.length
  return { min: min, max: max, sum: sum, avg: avg }
}
console.log(Warmup(array))
