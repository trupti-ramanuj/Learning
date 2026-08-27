const customers = [
    { id: 1, name: ' Rahul Sharma ', email: 'RAHUL@EXAMPLE.COM' },
    { id: 2, name: 'Priya Patel', email: ' priya@example.com ' },
    { id: 3, name: ' Amit Shah ', email: 'AMIT@EXAMPLE.COM' },
    { id: 4, name: '', email: null },
    { id: 5, name: 'Neha Joshi ', email: 'NEHA@EXAMPLE.COM ' },
];

//Q1. Remove unnecessary spaces from every customer name.

const spaces = customers
    .map(c => c.name.trim())

console.log(spaces);


//Q2. Convert every email address to lowercase.

const lemail = customers
    .filter(e => e.email !== null)
    .map(e => e.email.toLocaleLowerCase())
console.log(lemail);


//Q3. Remove customers who do not have a valid name.


//Q4. Remove customers who do not have an email.
const re = customers.filter(e => e.email !== null)
console.log(re);

//Q5. Create a cleaned customer array without modifying the original array.
const cc = customers
    .filter(c => c.name.trim() !== '')
    .filter(c => c.email !== null)

    .map(c => ({
        ...c,
        name: c.name.trim(),
        email: c.email.toLowerCase()
    }));
console.log(cc);

//Q6. Find the number of valid customers.

console.log(cc.length);

//Q7. Find all customers whose email contains 'example.com'.

const example = cc.filter(c => c.email.includes('example.com'));
console.log(example);
