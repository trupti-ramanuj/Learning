// Write a BMI calculator

function bmi(weight, height) {
    return weight / (height * height)
}
console.log(bmi(50, 1.7).toFixed(2));



//Create a reusable discount calculator(HOF)


function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(1200));
console.log(twenty(1200));


//Build count using closere
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(c());

//create a pure function to transform a value

function double(val) {
    return val * 2;
}
console.log(double(5));

//Use IIFE to isolate variables

(function () {
    const password = "secret password";
    console.log(password);
})();