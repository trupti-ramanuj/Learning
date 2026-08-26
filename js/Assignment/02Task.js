const students = [
    { id: 1, name: 'Rahul', marks: [78, 65, 82] },
    { id: 2, name: 'Priya', marks: [91, 88, 95] },
    { id: 3, name: 'Amit', marks: [35, 42, 39] },
    { id: 4, name: 'Neha', marks: [72, 68, 75] },
];


// Q1 - Q2. Calculate the total & average marks marks for every student.
const studentResults = students.map((val) => {

    // Q1
    const total = val.marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    // Q2
    const average = total / val.marks.length;

    return {
        ...val,
        total,
        average
    };
});
console.log("Q1 & Q2:", studentResults);

// Q3. Find all students whose average marks are 60 or above.
const above = studentResults.filter(
    student => student.average >= 60
);
console.log(above);

// 4. Find the student with the highest average.
const highestAverage = studentResults.reduce(
    (max, stud) =>
        stud.average > max.average
            ? stud
            : max
);

console.log(highestAverage);

// Q5. Find the student with the lowest average.
const lowestAverage = studentResults.reduce(
    (min, stud) =>
        stud.average < min.average
            ? stud
            : min
);

console.log(lowestAverage);

// Q6. Count how many students passed. A student passes when their average is 40 or above.
const count = studentResults.filter(
    (val) => val.average >= 40
).length;


console.log(count);

// Q7. Create a result summary containing each student's name, average and pass/fail status.

const resultSummary = studentResults.map(student => ({
    name: student.name,
    average: student.average,
    status: student.average >= 40 ? 'Pass' : 'Fail'
}));


console.log(resultSummary);