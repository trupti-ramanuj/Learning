/*
1. Print the student's name.
2. Print the student's age.
3. Print the student's course.
4. Change the student's age to 21.
5. Change the student's city to Mumbai.
6. Add an email property.
7. Delete the isActive property.
8. Print the final object. */

const student = {
    id: 101,
    name: "Rahul",
    age: 20,
    course: "JavaScript",
    city: "Ahmedabad",
    isActive: true
};



console.log("Name:", student.name);
console.log("Age:", student["age"]);
console.log("Course:", student.course);

student.age = 21;
console.log(student.age);

student.city = "Mumbai"
console.log(student.city);

student.email = "trupti@google.com"
console.log(student)

delete student.isActive
console.log(student)
