
const jsonData = `[
  {
    "id": 1,
    "name": "Rahul",
    "role": "admin",
    "active": true
  },
  {
    "id": 2,
    "name": "Priya",
    "role": "user",
    "active": true
  },
  {
    "id": 3,
    "name": "Amit",
    "role": "user",
    "active": false
  }
]`;

console.log(jsonData);
//Q1. Convert the JSON string into JavaScript data.
const data = JSON.parse(jsonData);
console.log(data);

// Q2. Find all active users.
const active = data.filter(val => val.active);
console.log(active)

// Q3. Find all admin users.
const admin = data.filter(u => u.role === 'admin');
console.log(admin);

// Q4. Count users by role.

// Q5. Count active and inactive users.

// Q6. Create a new array containing only user names.
const newArr = data.map(e => e.name);
console.log(newArr);

// Q7. Convert the processed data back into JSON.

const pjson = JSON.stringify(data)
console.log(pjson);

// Q8. Handle invalid JSON without crashing the program.
function invalid(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    return 'Invalid JSON';
  }
}

console.log(invalid(jsonData));
console.log(invalid('{invalid json}'));