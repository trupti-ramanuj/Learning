const students = [
    {
        id: 1,
        firstName: "Rahul",
        lastName: "Patel",
        marks: 85
    },
    {
        id: 2,
        firstName: "Priya",
        lastName: "Shah",
        marks: 92
    },
    {
        id: 3,
        firstName: "Amit",
        lastName: "Mehta",
        marks: 35
    }
];
const change = students.map(students => (
    {
        id: students.id,
        name: students.firstName + " " + students.lastName,
        marks: students.marks,
        result: students.marks > 40 ? "Pass" : "Fail",
    }));
console.log(change);
console.log(students);