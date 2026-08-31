function sayMyName() {
    console.log("T");
    console.log("R");
    console.log("U");
    console.log("P");
    console.log("T");
    console.log("I");
}
//sayMyName();

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
    // console.log(number1 + number2);
}
const result = addTwoNumbers(3, 5);

// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("trupti"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, ...num1) {
    return num1
}
//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "trupti",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));






const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function arrFunction(getvalue) {
    let middleValue = Math.floor(getvalue.length / 2);
    return getvalue[middleValue];
}

const numbers = arrFunction(arr);

console.log(numbers); 