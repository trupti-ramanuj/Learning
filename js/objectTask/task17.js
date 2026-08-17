const students = [
    {
        name: "Rahul",
        course: "JavaScript"
    },
    {
        name: "Priya",
        course: "React"
    },
    {
        name: "Amit",
        course: "JavaScript"
    },
    {
        name: "Neha",
        course: "NodeJs"
    },
    {
        name: "Raj",
        course: "React"
    }
];

function groupStudentsByCourse(students) {
    return students.reduce((groups, student) => {
        if (!groups[student.course]) {
            groups[student.course] = [];
        }
        groups[student.course].push(student);
        return groups;
    }, {});
}
console.log("Grouped Student:", groupStudentsByCourse(students));