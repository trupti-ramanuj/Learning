
/*Perform the following:

1. Print all property names.
2. Print all property values.
3. Print each property in this format:
*/
const student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript",
    city: "Ahmedabad"
};

const keys = Object.keys(student);
console.log("keys:", keys);

const values = Object.values(student);
console.log("values:", values);

const eachProperty = Object.entries(student);
console.log("format:", student)