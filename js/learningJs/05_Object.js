//Object

const student = {
    name: "Trupti",
    age: 21,
    course: "B.sc(CA&IT)"
};

//Dot Notation

console.log(student.name);
console.log(student.age);

//Breacket Notation
console.log(student["course"]);
console.log(student["age"]);

const key = "name";
console.log(student[key]);

//Add property

student.city = "Ahmedabad";

//Update property
student.age = 22;
console.log(student);

//Delete property

delete student.age;
console.log(student);