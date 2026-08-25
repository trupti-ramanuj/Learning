// Q1: What's the difference between function declaration and expresstion in terms of hoisting?
//Q2.output print
abcd();
function abcd() {
    console.log(`Hello!`);
}

// abc();
// let h = function abc() {
//     console.log(`Hello`);
// }

// Q3. function convert errow function

let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3));

const add = (a, b) => a + b;
console.log(add(19, 20));
const greet = (name) => "Hello " + name;
console.log(greet("trupti"));

// Q4. Identify parameters and arguments

function welcome(name) {   // parameters
    console.log(name);
}
welcome("tupi"); //arguments


//Q5.
function demo(a, b, c) {
    console.log(a, b, c);
}

demo(1, 2); //a = 1, b = 2, c = undefine

// Q6.

function sayHi(name = "Guest") {
    console.log("Hi", name);
}
sayHi();//Hi Guest
sayHi("Tupi");//Hi Tupi

// Q7. What does the ... operator mean in parameters?

function abc(a, b, c, ...val) {
    console.log(a, b, c,
        val);
}
abc(1, 2, 3, 4, 5, 6);


// Q8. Use rest parameter to accept any number of scores and return the total.

function getScore(...score) {
    let total = 0;
    score.forEach(function (val) {
        total = total + val;
    })
    return total;
}
console.log(getScore(10, 20, 30, 40));

// Q.9

function checkAge(age) {
    if (age < 18) return "To young";
    return "Allowed";
}
console.log(checkAge(22));

// Q.10

function f() {
    return;
}
console.log(f());//undefined

//What does it mean when we say "functions are first-class citizens"?
//“Functions are first-class citizens in JavaScript because they can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures like arrays and objects.”

function createGreeting() {
    return function () {
        console.log("Hello");
    };
}

const greeting = createGreeting();

greeting();

//Q.11 : Can you assign a function to a variable and then call it?

let a = function () {
}
a();

// Q.12 : Pass a function into another function and execute it inside.

function pq(val) {
    val();
}
pq(function () {
    console.log("hey");
});

// Q.13 what is a higher- order function ?

function ad(call) {  //hof
    call();
}
ad(function () {
    console.log("hii")
})
//Q.14
// [1, 2, 3].map(function (x) {  //map is hof
//     return x * 2;
// });

//Q.15
let to = 0;
function addto(num) {
    to += num;
    return to;   //impure function
}
console.log(addto(10));

//Q.16  Convert the above function into a pure function.

let total = 0;
function addTotal(num) {
    total += num;
    return total;
}
console.log(addTotal(5));