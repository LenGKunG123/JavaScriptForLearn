class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
  }
  getFullName() {
    return console.log(
      `Firstname : ${this.firstName} , Lastname : ${this.lastName}`
    )
  }
  getAge() {
    const milliToday = Date.now()
    const milliBirthdate = this.dateOfBirth.getTime()
    const diffMilli = milliToday - milliBirthdate
    const dateOfDiffMilli = new Date(diffMilli)
    return dateOfDiffMilli.getFullYear() - 1970
  }
  isEqual(anotherPerson) {
    return (
      this.firstName?.toLowerCase() ===
        anotherPerson?.firstName?.toLowercase() &&
      this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
    )
  }
  toString() {
    return console.log(`Fullname : ${this.getFullName} , Age : ${this.getAge}`)
  }
}
const me = new Person('Leng', 'za', new Date(2003, 9, 13))
console.log(me.getAge())
