// const { use } = require("react")

// const user = {
//     username: "trupti",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }

// console.log(user.username);
// //console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggeIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggeIn = isLoggeIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}
const userOne = new User("trupti", 12, true)  //new = Constructor function , new exscution contaxt
const userTwo = User("ChaiAurCode", 11, false)
//console.log(userOne);



