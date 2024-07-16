//Assignment on ALmighty Formular

function SolveEquation (a, b, c){
    let descriminant = 4 * (a*a) + c 

    if (descriminant > 0){
        let root1 = (b + Math.sqrt(descriminant )) / (2 * b)
        let root2 = (b - Math.sqrt(descriminant)) / (2 * b)

        console.log("The root is " + root1)
        console.log("The root is " + root2)
    }
}
console.log(SolveEquation(2,4,8))




function sumNum(num1 ,num2, num3){
    return num1 + num2 + num3; 
}

console.log(sumNum(6,8,9))

// function for student and score
function studentScore(firstname , score){
    return `my name is ${firstname} and my exam score is ${score}`
}

console.log(studentScore('Prince' , 100))


function StudentInfo ( StudentName, Score){
    var students = StudentName
    var Student = Score
    console.log("Students Name: " + students)
    console.log("Score: " + Student)
}
StudentInfo("Paschal ", 30)


let names = {
    employeeName: "Paschal",
    employeeID: 321,
    employeePosition: "Intern"
}
console.log("Employees Name: "+ names.employeeName)
console.log("Employees ID: "+ names.employeeID)
console.log("Employees Position: " + names.employeePosition)

function Solve (a,b,c){
    return (a*a)+(2*b)+c
}
console.log("The answer is: "+ Solve(5, 4, 8))

// function Quadratic (b,a,c){

// }