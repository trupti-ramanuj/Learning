const users = [
    { id: 1, name: "Amit", age: 5 },
    { id: 2, name: "Rahul", age: 12 },
    { id: 3, name: "Priya", age: 18 },
    { id: 4, name: "Neha", age: 25 },
    { id: 5, name: "Raj", age: 32 },
    { id: 6, name: "Anjali", age: 47 },
    { id: 7, name: "Vikram", age: 8 },
    { id: 8, name: "Sneha", age: 15 },
    { id: 9, name: "Karan", age: 22 },
    { id: 10, name: "Pooja", age: 65 }
];

// output formate:
// {
//   "0-9": [],
//   "10-19": [],
//   "20-29": [],
//   "30-39": [],
//   "40-49": [],
//   "50-59": [],
//   "60-69": []
// }

console.log("output formate:")

const one = users.filter(val => val.age <= 9);
console.log("0-9:", one);

const two = users.filter(val => val.age >= 10 && val.age <= 19);
console.log("10-19:", two);

const three = users.filter(val => val.age >= 20 && val.age <= 29);
console.log("20-29:", three);

const four = users.filter(val => val.age >= 30 && val.age <= 39);
console.log("30-39:", four);

const five = users.filter(val => val.age >= 40 && val.age <= 49);
console.log("40-49:", five);

const six = users.filter(val => val.age >= 50 && val.age <= 59);
console.log("50-59:", six);

const seven = users.filter(val => val.age >= 60 && val.age <= 69);
console.log("60-69:", seven);