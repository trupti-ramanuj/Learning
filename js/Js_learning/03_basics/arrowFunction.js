const user = {
    username: "trupti",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);     // this meens : corrent  contaxt,refers to the object
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username = "trupti"
//     console.log(this.username);
// }
// chai()

// const chai = () => {         //arrow function
//     let username = "trupti"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {  //explisit return
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2  //implesit return

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "trupti" })
console.log(addTwo(3, 4));

// const myArray = [2,5,3,7,8]

// myArray.forEach(function(()=>()))

