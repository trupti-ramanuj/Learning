//declaration

function greet() {
    console.log("Hello Trupti");
}
greet();

//perameters and arguments

function add(a, b) {   // a&b is perameters
    console.log(a + b);
}
add(10, 20);  //10&20 is arguments

//return statement

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

//function Expression

const green = function () {
    console.log("Green");
};
green();


//Arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 20));

const square = n => n * n;
console.log(square(3));

const my = () => {
    console.log("Trupti");
};
my();

//default perameters

function myName(name = "User") {
    console.log(`Hello ${name}`);
}
myName();
myName("Trupti");

//callback functions

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}
calculate(10, 20, function (result) {
    console.log(result);
});

setTimeout(() => {
    console.log("Hello");
}, 2000);