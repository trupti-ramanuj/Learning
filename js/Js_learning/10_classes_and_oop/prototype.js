// let myName = "trupti     "
// let mychannel = "chai    "
// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.trupti = function () {
    console.log(`trupti is present in all obj`);
}

Array.prototype.heyTrupti = function () {
    console.log(`Trupti says hello`);
}
//heroPower.trupti()

// myHeros.trupti()
// myHeros.heyTrupti()
//heroPower.heyTrupti()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    _proto_: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()