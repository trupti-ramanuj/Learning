const products = [
    { id: 1, name: 'Keyboard', category: 'Electronics', price: 2500 },
    { id: 2, name: 'Notebook', category: 'Stationery', price: 300 },
    { id: 3, name: 'Monitor', category: 'Electronics', price: 15000 },
    { id: 4, name: 'T-Shirt', category: 'Clothing', price: 1200 },
];

// Q1 & Q2

products.forEach(val => {
    console.log(`Name:${val.name}, Category:${val.category},Price:${val.price}`);
});