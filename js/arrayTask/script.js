// Create an array whith 3 fruits and print the second fruit.

let fruit = ["apple", "guava", "banana"];
console.log(fruit[1]);
fruit[1];

//Add "Mango" at the end and "Pineapple" at the beginning of this array:

let fruits = ["Apple", "Banana"];
fruits.push("Mango");
fruits.unshift("Pineapple");

console.log(fruits);

//Replace "Banana" with "Kiwi" in the array above.
fruits = ["Apple", "Banana"];
fruits.pop();
fruits.push("Kiwi");
console.log(fruits)

//Remove the last item from this array using a method:
let numbers = [1, 2, 3, 4];
numbers.pop();

//Insert "Red" and "Blue" at index 1 in this array:

let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors)

//Extract only the middle 3 elements from this array 
let items = [1, 2, 3, 4, 5, 6]
let newarr = items.slice(2, 5);
console.log(newarr);

//Sort this array alphabetically and then reverse it:

let names = ["Zara", "Anju", "Mira", "Bhavya"];
console.log(names.sort().reverse());

//Use .map() to square each number;

let arr = [1, 2, 3, 4];
let square = arr.map(function (val) {
    return val * val;
});
console.log(square);

//Use .filter() to keep numbers greater than 10:

let fill = [5, 12, 8, 20, 3];
let farray = fill.filter((val) => {

    return val > 10;
})
console.log(farray);

//Use .reduce() to find the sum of this array:

let rr = [10, 20, 30];
let rrr = rr.reduce((sum, num) => {
    return sum + num;
}, 0);
console.log(rrr);

//Use .find() to get the first number less than 10:
