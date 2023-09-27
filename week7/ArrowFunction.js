function sum(n1, n2) {
  return n1 + n2
}

//arrow
const sum1 = (n1, n2) => n1 + n2
const sum2 = (n1, n2) => {
  return n1 + n2
}
const sum3 = (n1, n2) => {
  let result = 0
  result = n1 + n2
  return result
}

const echo = (m) => m // equals function (m) {return m}
console.log(echo('INT'))

const fruit = ['apple', 'mango', 'grape', 'grava']
fruit.forEach((fruit) => console.log(fruit.charAt(3)))
let allFruits = ''
fruit.forEach((fruit) => (allFruits += fruit + ' '))
console.log(allFruits)

const word = ['hi', 'hello', 'morning', 'afternoon']
const wordFilter = word.filter((word) => word.length > 3)
console.log(wordFilter)

const student = [
    {id: 1, firstname: 'Somsak',Lastname: 'Jaidee'},
    {id: 2, firstname: 'Leng',Lastname: 'Dee'},
    {id: 3, firstname: 'Mark',Lastname: 'Za'}
]

const studentFilter1 = student.filter(student => student.Lastname.toLowerCase().startsWith('jai'))
//require students who has firstname or lastname include 'de' with case insensitive
const studentFilter2 = student.filter(student => student.firstname.toLowerCase().includes('de') || student.Lastname.toLowerCase().includes('de'))
console.log(studentFilter2);

const ids = student.map((student) => student.id)
console.log(ids);

//return all students fullname ,fullname format is "lastname,firstname"
const studentFullName = student.map(student => student.Lastname + ' ' + student.firstname)
console.log(studentFullName);

//return all student ids in the format 'entry year' follow with student id
// {id: 1 ,firstname: 'Somsak' , lastname : 'Jaidee' } => 20231
const currentYear = new Date (Date.now()).getFullYear()
const newIds = student.map(student => {
    return `${currentYear}${student.id}`
})
console.log(newIds);

const studentJai = student.findIndex(student => student.Lastname.toLowerCase().startsWith('jai'))
console.log(studentJai);

const everyMoreThanZero = student.every( student => student.id > 0)


const someMoreThanZero = student.some( student => student.id > 0)
console.log(everyMoreThanZero);
console.log(someMoreThanZero);