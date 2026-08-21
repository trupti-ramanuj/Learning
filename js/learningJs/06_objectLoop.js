//for...in

const student = {
    name: "Trupti",
    age: 21,
    course: "B.Sc"
};

for (const key in student) {
    console.log(key, student[key]);
}
