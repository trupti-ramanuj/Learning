
//Q1. Print number from 1 to 10 using a for loop.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//Q2. Print numbers from 10 to 1 using while loop.

// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// Q3. Print even number from 1 to 20 using a for loop.

// for (let i = 1; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Q4. Print odd number from 1 to 15 using a while loop.

// let j = 1;
// while (j < 16) {
//     if (j % 2 === 1) {
//         console.log(j);
//     }
//     j++;
// }

// Q5. Print the multiplication table of 5(i.e.,5 x 1 = 5 ... 5 x 10 = 50)


// for (let i = 1; i <= 10; i++) {
//     console.log(`5*${i}=${5 * i}`);
// }

// Q6. Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//     sum = sum + 1
// }
// console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3.

// for (let i = 1; i < 51; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.

//(e.g.,"1 is odd", "2 is even", ...)


// let val = prompt("give a number");

// for (let i = 1; i <= val; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Give a number: ", (val) => {

    val = Number(val);

    for (let i = 1; i <= val; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }

    rl.close();
});

// const redline =require()
//Q9. Count how many number