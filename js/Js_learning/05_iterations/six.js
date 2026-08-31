const myNum = [1, 2, 3, 4, 5, 6, 7,8 , 9, 10]

// const newNums = myNum.filter((num)=>num>4)
// console.log(newNums);

// const newNums = myNum.filter((num)=>{
//     return num > 4
// })
// console.log(newNums);

// const newN = []
// myNum.forEach((num)=>{
//     if(num>4){
//         newN.push(num)
//     }
// })
// console.log(newN);




const transactions = [
    { id: 1, amount: 245.75, type: 'credit', category: 'Food', date: '2024-02-01' },
    { id: 2, amount: 89.40, type: 'debit', category: 'Shopping', date: '2024-02-02' },
    { id: 3, amount: 32.15, type: 'debit', category: 'Bills', date: '2024-02-03' },
    { id: 4, amount: 1200.00, type: 'credit', category: 'Salary', date: '2024-02-04' },
    { id: 5, amount: 58.90, type: 'debit', category: 'Food', date: '2024-02-05' },
    { id: 6, amount: 175.30, type: 'debit', category: 'Shopping', date: '2024-02-06' },
    { id: 7, amount: 150.00, type: 'credit', category: 'Salary', date: '2024-02-07' },
    { id: 8, amount: 42.60, type: 'debit', category: 'Bills', date: '2024-02-08' },
    { id: 9, amount: 310.50, type: 'credit', category: 'Salary', date: '2024-02-09' },
    { id: 10, amount: 67.25, type: 'debit', category: 'Food', date: '2024-02-10' },
    { id: 11, amount: 95.80, type: 'debit', category: 'Shopping', date: '2024-02-11' },
    { id: 12, amount: 420.00, type: 'credit', category: 'Salary', date: '2024-02-12' },
    { id: 13, amount: 28.45, type: 'debit', category: 'Bills', date: '2024-02-13' },
    { id: 14, amount: 140.00, type: 'debit', category: 'Shopping', date: '2024-02-14' },
    { id: 15, amount: 85.90, type: 'credit', category: 'Salary', date: '2024-02-15' },
    { id: 16, amount: 19.99, type: 'debit', category: 'Food', date: '2024-02-16' },
    { id: 17, amount: 64.50, type: 'debit', category: 'Bills', date: '2024-02-17' },
    { id: 18, amount: 180.25, type: 'credit', category: 'Salary', date: '2024-02-18' },
    { id: 19, amount: 75.00, type: 'debit', category: 'Shopping', date: '2024-02-19' },
    { id: 20, amount: 38.70, type: 'debit', category: 'Food', date: '2024-02-20' },
];

let categoryP = transactions.filter((product) => product.category === 'Food');
categoryP = transactions.filter((product)=>{
    return product.amount >= 100 && product.category === 'Food'
})

console.log(categoryP);