//if
const isUserloggedIn = true
// if (2 == "2") {
//     console.log("executed");
// }


// const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50")
// }

//<,>,<=,>=,==,!=,===,!==

// const score = 200
// if (score > 100) {
//     var power = "fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);

//implisit scope
const blance = 1000
// if (blance > 500) console.log("test");

if (blance < 500) {
    console.log("less than 500");
}
else if (blance < 750) {
    console.log("less than 750");
}
else if (blance < 900) {
    console.log("less than 900")
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course");
}
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}