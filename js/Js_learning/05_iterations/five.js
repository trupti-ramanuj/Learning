const coding= ["js","ruby","python","java","cpp"]

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding=[
    {
        lenguageName: "javascript",
        lenguageFileName: "js"
    },
     {
        lenguageName: "java",
        lenguageFileName: "java"
    },
     {
        lenguageName: "python",
        lenguageFileName: "py"
    }
]

myCoding.forEach( (item)=>{
console.log(item);
console.log(item.lenguageName);
})