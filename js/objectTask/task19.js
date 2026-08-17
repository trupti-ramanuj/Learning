/*
{
  id: 101,
  name: "Rahul",
  email: "rahul@gmail.com",
  city: "Ahmedabad"
}

*/
const user = {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "123456",
    age: 25,
    city: "Ahmedabad",
    role: "user",
    isActive: true
};
function getPublicProfile(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.city
    }
}

const publicProfile = getPublicProfile(user);
console.log("Public Profile User:", publicProfile);
console.log("Original User Profile:", user);
