//string

const text = "JavaScript";

//length

console.log(text.length);

//tiUpperCase()

console.log(text.toUpperCase());

//slice()

console.log(text.slice(0, -4));

//substring()
console.log(text.substring(4));

console.log(text.substring(0, 4));

//split()

const course = "HTML,CSS,JavaScript";
const result = course.split(",");
console.log(result);

//includes()

console.log(course.includes("Java"));

//replace()

const message = "Hello world";
console.log(message.replace("world", "Trupti"));

//trim()

const name = "      Trupti     ";

console.log(name.trim());

//charAt()
console.log("JavaScript".charAt(0));
