
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

        getAverage() {
            const M = [this.math, this.science, this.english, this.science, this.computer];
            const total = M.reduce((sum, mark) => sum + mark, 0);
            return total / M.length;
        }
    }
};

console.log(student.marks.math);
console.log(student.marks.science);
console.log(student.marks.english);

student.marks.math = 85;
console.log(student.marks.math);

student.marks.computer = 95;
console.log(student.marks.computer);

console.log(student.marks.math + student.marks.science + student.marks.english + student.marks.computer);


console.log(student.marks.getAverage());


const average = student.marks.getAverage();

student.result = average >= 80 ? "Excellent" :
    average >= 60 ? "Good" :
        average >= 40 ? "Pass" :
            "Fail";


console.log(student);

