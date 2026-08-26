
const transactions = [
    { id: 1, type: 'credit', amount: 5000 },
    { id: 2, type: 'debit', amount: 1200 },
    { id: 3, type: 'debit', amount: 800 },
    { id: 4, type: 'credit', amount: 2500 },
    { id: 5, type: 'debit', amount: 600 },
];


// Q1. Total credit
const totalCredit = transactions
    .filter((t) => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);

console.log(totalCredit);


// Q2. Total debit
const totalDebit = transactions
    .filter((e) => e.type === 'debit')
    .reduce((total, t) => total + t.amount, 0);

console.log(totalDebit);


// Q3. Current balance
const balance = totalCredit - totalDebit;

console.log(balance);


// Q4. Largest transaction
const lt = transactions.reduce(
    (max, l) =>
        l.amount > max.amount ? l : max
);

console.log(lt);


// Q5. Debit transactions greater than 700
const ld = transactions.filter(
    (value) =>
        value.type === 'debit' &&
        value.amount > 700
);

console.log(ld);


// Q6. Credit count
const creditCount = transactions.filter(
    (value) => value.type === 'credit'
).length;

console.log(creditCount);


// Q7. Debit count
const debitCount = transactions.filter(
    (value) => value.type === 'debit'
).length;

console.log(debitCount);


// Q8 - Q9. Function with validation
function getTransactionsByType(type) {

    if (type !== 'credit' && type !== 'debit') {
        console.log("Invalid transaction type");

    }

    return transactions.filter(
        (value) => value.type === type
    );
}


// Test
console.log(getTransactionsByType('credit'));

console.log(getTransactionsByType('hello'));