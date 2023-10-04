const nums = [10,3,75,1,30,100]
// //splice to remove 75 1 30
// //splice (start Index , Number of delete)
// const removeEle = nums.splice(2,3)
// console.log(removeEle);
// //splice to add new elements
// const addEle = nums.splice(2,0,11,555,888)
// console.log(addEle); // return empty array
// console.log(nums); // return already added [ 10, 3, 11, 555, 888, 100 ]
// //splice to replace at index 1 with [200,400]
console.log(nums)
const replaceEles = nums.splice(1,2,200,400)

console.log(replaceEles);
console.log(nums)


//replace negative number to zero
const nums2 = [-5,-6,7,8,9,-1,0]
const removeNegative = nums2.map(arr => arr < 0? 0 : arr)
console.log(removeNegative);