const myObject={
    js: 'javascript',
    cpp:'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    
       console.log(myObject[key]);
       console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
console.log(key);
console.log(programming[key]);
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// for(const key of map){
// console.log(key);
// }