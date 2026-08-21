const student = {
    name: "Trupti",
    age: 21
};
const { name, age } = student;

console.log(name);
console.log(age);

const { name: studentName } = student;
console.log(studentName);
