/*
1. Print every student's name.
2. Print every student's name and marks.
3. Print the total number of students.
4. Print all students studying JavaScript.
5. Print all students older than 20. */

const students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        course: "JavaScript",
        marks: 85
    },
    {
        id: 2,
        name: "Priya",
        age: 21,
        course: "JavaScript",
        marks: 92
    },
    {
        id: 3,
        name: "Amit",
        age: 19,
        course: "React",
        marks: 65
    },
    {
        id: 4,
        name: "Neha",
        age: 22,
        course: "Node.js",
        marks: 38
    },
    {
        id: 5,
        name: "Raj",
        age: 20,
        course: "JavaScript",
        marks: 74
    }
];
//1. Print every student's name.
students.forEach(student => {
    console.log(student.name);
})
//2. Print every student's name and marks.
students.forEach(student => {
    console.log(student.name, student.marks);
})
//3. Print the total number of students.
console.log(students.length);
//4. Print all students studying JavaScript.
const jsStudent = students.filter(students => {
    return students.course === "JavaScript";
})
console.log(jsStudent);
//5. Print all students older than 20.
const studentage = students.filter(students => {
    return students.age >= 20;
})
console.log(studentage)
//Task 
function findStudentById(students, id) {
    return students.find(students => students.id === id)
};
const studentId = findStudentById(students, 3);
console.log(studentId)
function findStudentByName(students, name) {
    return students.find(students => students.name === name)
};
const studentName = findStudentByName(students, "Raj");
console.log(studentName)
function findStudentByCourse(students, course) {
    return students.find(students => students.course === course)
};
const studentCourse = findStudentByCourse(students, "JavaScript");
console.log(studentCourse);


//Task 7
/*
1. Students who passed.
2. Students who failed.
3. Students with marks >= 80.
4. Students younger than 21.
5. Students studying JavaScript.
6. Students studying React.*/


function getPassedStudent(students) {

    return students.filter(function (student) {
        return student.marks >= 40;
    });
}
console.log("Passed:", getPassedStudent(students));
function getFailedStudent(students) {

    return students.filter(function (student) {
        return student.marks < 40;
    });
}
console.log("Fail:", getFailedStudent(students));
function getmarkStudent(students) {

    return students.filter(function (student) {
        return student.marks >= 80;
    });
}
console.log("Marks:", getmarkStudent(students));
function getyoungerStudent(students) {

    return students.filter(function (student) {
        return student.age >= 21;
    });
}
console.log("Younger:", getyoungerStudent(students));

// function getJSStudent(students) {

//     return students.filter(function (student) {
//         return student.course === "JavaScript";
//     });
// }
// console.log("JsStudents:", getJSStudent(students));
const jSStudent = students.filter(students => {
    return students.course === "JavaScript";
})
console.log(jSStudent);
const reactStudent = students.filter(students => {
    return students.course === "React";
})
console.log(reactStudent);
