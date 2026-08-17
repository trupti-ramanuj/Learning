const user = {
    name: "xyz",
    age: 20,
    get message() {
        return `hello my name is ${this.name} and i am ${this.age} years old`;
    },
    get test() {
        return this.name;
    },
    fn() {
        console.log(this.name);
    }
}

console.log(user);
console.log(user.message);
console.log(user.test);

user.name = "hari"

console.log(user);
console.log(user.message);
console.log(user.test);

const user2 = user;

console.log(user2);
console.log(user2.message);
console.log(user2.test);

user2.name = "jay"

console.log(user2);
console.log(user2.message);
console.log(user2.test);

console.log(user);
console.log(user.message);
console.log(user.test);

