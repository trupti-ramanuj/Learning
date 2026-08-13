function getProperty(obj, propertyName) {
    return obj[propertyName];
}
const student = {
    name: "Rahul",
    age: 20,
    city: "Ahmedabad",
    course: "JavaScript",


}
console.log(getProperty(student, "name"));
console.log(getProperty(student, "age"));
console.log(getProperty(student, "city"));
console.log(getProperty(student, "course"));
student.email = "trupti@gmail.com";
console.log(getProperty(student, "email"))


let propertyName = "city";

console.log(student[propertyName]);


student.course = "JS"
propertyName = "course";
console.log(student[propertyName]);




