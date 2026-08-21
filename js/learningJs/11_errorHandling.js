try {
    console.log(x);
} catch (error) {
    console.log("Something went wrong")
}
try {
    console.log("Try");
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Finally");
}

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    return "Allowed";
}
try {
    console.log(checkAge(15));
} catch (error) {
    console.log(error.message);
};


//Debugging

// console.log("Value:", value);

// console.warn("Warning");
// console.error("Error");
// console.table(users);

