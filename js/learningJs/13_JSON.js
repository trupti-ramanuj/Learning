//JSON.stringify()
var user = {
    name: "Trupti",
    age: 21
};
var jsonData = JSON.stringify(user);

console.log(jsonData);

//JSON.parse()
var jsonData = '{"name":"Trupti","age":21}';

var user = JSON.parse(jsonData);

console.log(user.name);