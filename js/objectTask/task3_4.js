
// 1. Print every subject's marks.
// 2. Change math marks to 85.
// 3. Add a new subject called computer with marks 95.
// 4. Calculate the total marks.
// 5. Calculate the average marks.
// 6. Add total to the student object.
// 7. Add average to the student object.


const student = {
    id: 101,
    name: "Rahul",
    marks: {
        math: 80,
        science: 75,
        english: 90,

        // getAverage() {
        //     const M = [this.math, this.science, this.english, this.science, this.computer];
        //     const total = M.reduce((sum, mark) => sum + mark, 0);
        //     return total / M.length;
        // }
    }
};
//1
// console.log(student.marks.math);
// console.log(student.marks.science);
// console.log(student.marks.english);

Object.entries(student.marks).forEach(([subject, marks]) => {
    console.log(`${subject}:${marks}`);
});
//2
student.marks.math = 85;
console.log("math:", student.marks.math);
//3
student.marks.computer = 95;
console.log("computer:", student.marks.computer);
//4
// console.log(student.marks.math + student.marks.science + student.marks.english + student.marks.computer);
const totalMarks = Object.values(student.marks).reduce(
    (total, marks) => total + marks, 0
);
student.total = totalMarks;
//5
// console.log(student.marks.getAverage());




const averageMarks = totalMarks / Object.keys(student.marks).length;
student.average = averageMarks;

console.log(student);

//task 4

//const average = student.marks.getAverage();

// student.result = average >= 80 ? "Excellent" :
//     average >= 60 ? "Good" :
//         average >= 40 ? "Pass" :
//             "Fail";

function getResult(average) {
    if (average >= 80) {
        return "Excellent";
    }
    if (average >= 60) {
        return "Good";
    }
    if (average >= 40) {
        return "Pass";
    }
    return "Fail";
}
student.result = getResult(student.average);
console.log("Result:", student.result);
console.log("Student:", student);

console.log(getResult(90));
console.log(getResult(70));
console.log(getResult(50));
console.log(getResult(30));