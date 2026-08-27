const products = [
    { id: 1, name: 'Keyboard', price: 2500, stock: 8, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 1200, stock: 0, category: 'Electronics' },
    { id: 3, name: 'Notebook', price: 300, stock: 25, category: 'Stationery' },
    { id: 4, name: 'Monitor', price: 15000, stock: 3, category: 'Electronics' },
    { id: 5, name: 'Pen Set', price: 150, stock: 40, category: 'Stationery' },
];

//Q1. Find the total value of all products currently in stock.

const totalStock = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
);

console.log(totalStock);

//Q2. Find all products that are out of stock.
const outOfStock = products.filter(
    (value) => value.stock === 0
);

console.log(outOfStock);

//Q3. Find all products where stock is greater than 5.
const greaterStocks = products.filter(val => val.stock >= 5);

console.log(greaterStocks);



//Q4. Find the most expensive product. 
const expensive = products.reduce((max, product) =>
    product.price > max.price ? product : max

);


console.log("e", expensive);


// Q5. Number of products in each category
const categoryCount = products.reduce((cate, product) => {
    if (product.category)
        return cate;
}, {});



//Q6.Create a new array containing only product names and prices.

const newArray = products.map((val) => ({
    name: val.name,
    price: val.price
}));
console.log(newArray);

//Q7. Find the product with the highest stock quantity.
const highest = products.reduce((max, product) =>
    product.stock > max.stock ? product : max
);

console.log(highest);



