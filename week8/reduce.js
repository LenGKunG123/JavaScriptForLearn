const nums = [1 , 3 , 100 , -2 , 34]
const total = nums.reduce((sum,num) => sum+num,0)
console.log(total);

const names = ['Alice' , 'Bob' , 'Ann' , 'Cath']
const firstChar = names.reduce((concat,str) => concat + str.charAt(0),'')
console.log(firstChar);
const maxNum = nums.reduce((num , max) => Math.max(max,num))
console.log(maxNum);

// return total price
const buyProducts =[
    {price:50 ,quantity:2},
    {price:299 ,quantity:10},
    {price:15 ,quantity:5}
]
const totalPrice = buyProducts.reduce((sum , price) => sum + price.price * price.quantity,0 )
console.log(totalPrice);