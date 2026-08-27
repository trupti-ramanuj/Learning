const users = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'admin' },
    { id: 2, name: 'Priya Patel', email: 'priya@example.com', role: 'user' },
    { id: 3, name: 'Amit Shah', email: 'amit@example.com', role: 'user' },
    { id: 4, name: 'Neha Joshi', email: 'neha@example.com', role: 'manager' },
    { id: 5, name: 'Karan Mehta', email: 'karan@example.com', role: 'user' },
];


//Q1. Find users whose name contains 'ra'.
const ra = users.filter(u => u.name.includes('ra'));
console.log(ra);

//Q2. Make the search case-insensitive.

//Q3. Find users whose email belongs to 'example.com'.
const example = users.filter(u => u.email.includes('example.com'));
console.log(example);

//Q4. Find all users with the role 'user'.

const role = users.filter(val => val.role === 'user')

console.log(role);

//Q5. Create a function that searches users by name.
function searchByName(searchN) {
    const search = searchN.trim().toLowerCase();

    return users.filter(user =>
        user.name.toLowerCase().includes(search)
    );
}

console.log(searchByName('  rahul  '));

// Q6 + Q7 + Q8
function searchUsers(searchN) {
    const search = searchN.trim().toLowerCase();

    const result = users.filter(val =>
        val.name.toLowerCase().includes(search) ||
        val.email.toLowerCase().includes(search)
    );

    if (result.length === 0) {
        return 'No matching user found';
    }

    return result;
}

console.log(searchUsers('PRiya'));
console.log(searchUsers('abc'));