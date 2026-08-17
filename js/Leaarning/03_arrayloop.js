//Array Loops

//for loop

const numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//for...of
for (const number of numbers) {
    console.log(number);
}

//forEach()

numbers.forEach(function (number) {
    console.log(number);
})

numbers.forEach(number => {
    console.log(number);
});