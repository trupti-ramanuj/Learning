const student = {
    name: "Rahul",
    age: 20,
    city: "Ahmedabad",
    course: "JavaScript",
}


let propertyName = "city";
console.log(student[propertyName]);

propertyName = "course";
console.log(student[propertyName]);

function getProperty(obj, propertyName) {
    if (obj === null || typeof obj !== "object") {
        return undefined;
    }
    return obj[propertyName];
}

console.log(getProperty(student, "name"));
console.log(getProperty(student, "age"));
console.log(getProperty(student, "city"));
console.log(getProperty(student, "course"));
student.email = "trupti@gmail.com";
console.log(getProperty(student, "email"))
