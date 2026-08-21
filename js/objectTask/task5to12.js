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
console.log(studentage);


//Task 6
//1
function findStudentById(students, id) {
    return students.find(students => students.id === id)
};
let studentId = findStudentById(students, 3);
console.log(studentId);
studentId = findStudentById(students, 10);
console.log(studentId);
//2
function findStudentByName(students, name) {
    return students.find(students => students.name === name)
};
const studentName = findStudentByName(students, "Raj");
console.log(studentName);
//3
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

//1
function getPassedStudent(students) {

    return students.filter(function (student) {
        return student.marks >= 40;
    });
}
console.log("Passed:", getPassedStudent(students));
//2
function getFailedStudent(students) {

    return students.filter(function (student) {
        return student.marks < 40;
    });
}
console.log("Fail:", getFailedStudent(students));
//3
function getmarkStudent(students) {

    return students.filter(function (student) {
        return student.marks >= 80;
    });
}
console.log("Marks:", getmarkStudent(students));
//4
function getyoungerStudent(students) {

    return students.filter(function (student) {
        return student.age < 21;
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
//6
const reactStudent = students.filter(students => {
    return students.course === "React";
})
console.log(reactStudent);

//task 8

function updateStudent(students, id, property, value) {

    const student = students.find(student => student.id === id);
    if (!student) {
        return {
            success: false,
            message: "Student not found"
        };

    }
    if (!(property in student)) {
        return {
            success: false,
            message: "Property does not exist"
        };
    }
    student[property] = value;
    return {
        success: true,
        message: "Student updated successfully",
        student: student
    };
}

console.log(updateStudent(students, 1, "age", 21));
console.log(updateStudent(students, 1, "name", "Rahul Patel"));
console.log(updateStudent(students, 1, "course", "React"));
console.log(updateStudent(students, 1, "marks", 90));

console.log(updateStudent(students, 999, "age", 25));
console.log(updateStudent(students, 1, "email", "test@gmail.com"));

//task 9

function addStudent(students, student) {
    if (!student || typeof student !== "object") {
        return {
            success: false,
            message: "Invalid student data"
        };
    }
    if (student.id === undefined ||
        student.name === undefined ||
        student.age === undefined ||
        student.course === undefined ||
        student.marks === undefined
    ) {
        return {
            success: false,
            message: "Missing student data"
        };
    }
    if (students.some(existing => existing.id === student.id)) {
        return {
            success: false,
            message: "Student ID alredy exists"
        };
    }
    if (typeof student.marks !== "number" ||
        student.marks < 0 ||
        student.marks > 100
    ) {
        return {
            success: false,
            message: "Marks must be between 0 and 100"
        };
    }
    students.push(student);
    return {
        success: true,
        message: "Sudent added successfully",
        student: student
    };
}
console.log(
    addStudent(students, {
        id: 6,
        name: "Karan",
        age: 21,
        course: "Python",
        marks: 88
    })
);
// console.log(addStudent(students, {
//     id: 7,
//     name: "Invalid",
//     age: 20,
//     course: "Python",
//     marks: 120
// })
// );

//Task 10

function removeSgtudent(students, id) {
    const index = students.findIndex(student => student.id === id);
    if (index === -1) {
        return {
            success: false,
            message: "Student not found"
        };
    }
    const removedStudent = students.splice(index, 1)[0];
    return {
        success: true,
        message: "Student not found"
    };
}
console.log(removeSgtudent(students, 3));
console.log(removeSgtudent(students, 999));

//Task 11
function getHighstMarkStudent(students) {
    if (students.length === 0) {
        return undefined;
    }
    return students.reduce((highest, student) => {
        return student.marks > highest.marks ? student : highest;
    });
}
console.log("Highest:", getHighstMarkStudent(students));

function getLowestMarkStudent(students) {
    if (students.length === 0) {
        return undefined;
    }
    return students.reduce((lowest, student) => {
        return student.marks < lowest.marks ? student : lowest;
    });
}
console.log("Lowest:", getLowestMarkStudent(students));

function getAverageMarks(students) {
    if (students.length === 0) {
        return 0;
    }
    const total = students.reduce(
        (sum, student) => sum + student.marks, 0);
    return total / students.length;
}
console.log("Average:", getAverageMarks(students));

function getTotalMarks(students) {
    return students.reduce(
        (sum, student) => sum + student.marks, 0);
}
console.log("Total:", getTotalMarks(students));

function getPassedCount(students) {
    return students.filter(student => student.marks >= 40).length;
}
console.log("Passed Count:", getPassedCount(students));

function getFailedCount(students) {
    return students.filter(student => student.marks < 40).length;
}
console.log("Failed Count:", getFailedCount(students));

//Task 12

function createStudentSummary(student) {
    return {
        id: student.id,
        name: student.name,
        course: student.course,
        result: student.marks >= 40 ? "Pass" : "Fail"
    };
}
const summary = {
    id: 1,
    name: "Rahul",
    age: 20,
    course: "JavaScript",
    marks: 85
};
console.log(createStudentSummary(summary));
console.log("Original Student:", summary);