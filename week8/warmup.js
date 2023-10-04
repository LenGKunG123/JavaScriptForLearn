const studentScore = [
    {name : 'Alice', score: 85},
    {name : 'Bob', score: 92},
    {name : 'Charlie', score: 68},
    {name : 'Davide', score: 55},
    {name : 'Eve', score: 78}
]
const getPassingNames = (arrayOfStudents) => {
    const studentPass = []
    arrayOfStudents.forEach((student) => {
        if (student.score >= 70)
            studentPass.push(student.name.toUpperCase())
        })
        return studentPass
}
const passingName = getPassingNames(studentScore)
console.log(passingName);
