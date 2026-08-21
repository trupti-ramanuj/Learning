//Higher - Order Array Methods

//map()
const num = [1, 2, 3, 4];
const mal = num.map(number => number * 2);
console.log(mal);

const students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 90 }
];
const names = students.map(student => student.name);
console.log(names);

//filter()

const value = [10, 15, 20, 25, 30];
const result = value.filter(number => number > 20);
console.log(result);

//reduce()

const total = value.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);

//find()

const find = value.find(number => number > 20);
console.log(find);

//some()
console.log(value.some(number => number > 25));

//every()
console.log(value.every(number => number > 5));
