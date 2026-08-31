const promiseOne = new Promise(function (res, req) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        res()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (res, req) {
    setTimeout(function () {
        console.log("Async task 2");
        res()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (res, req) {
    setTimeout(function () {
        res({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (res, req) {
    setTimeout(function () {
        let error = true
        if (!error) {
            res({ username: "trupti", password: "200005" })
        } else {
            req('ERROR: Something Went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either res or rej"))

const promiseFive = new Promise(function (res, req) {
    setTimeout(function () {
        let error = true
        if (!error) {
            res({ username: "javaScript", password: "123" })
        } else {
            req('ERROR: JS Went wrong')
        }
    }, 1000)
});
async function consumePromiseFive() {
    try {
        const res = await promiseFive
        console.log(res);
    } catch (error) {
        console.log(error);
    }

}
consumePromiseFive();
// const data = [
//     { id: 1, name: "Trupti" },
//     { id: 2, name: "Rahul" },
//     { id: 3, name: "Priya" }
// ];
// const data = req.body;

// console.log("Data:", data);
// const updatedData = data.filter(d => d != d.id) //catch a bug
// console.log(updatedData)

// async function getAllUser() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await res.json()
//         console.log(data);
//     } catch (erro) {
//         console.log("E:", error);
//     }
// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))