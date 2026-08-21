// let/const

let age = 20;

console.log(age);

age = 21;
console.log(age);
// Arrow function

// const add = (a, b) => a + b;


//Template literals

// console.log(`Hello ${name}`);

//Destructuring

// const [a, b] = [10, 20];
// const { name, age } = student;

//spread operator

//rest operator

//for...of , for...in
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

const user = {
    name: "Trupti",
    age: 21
};

for (const key in user) {
    console.log(key);
}
//export export const name = "Trupti";

// export function add(a, b) {
//     return a + b;
// }
//import import { name, add } from "./app.js";