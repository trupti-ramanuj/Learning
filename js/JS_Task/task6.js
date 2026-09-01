

// TASKS:

// 1. Fetch all products from the API.
// 2. Create an array containing only the product names.
// 3. Create an array containing only the product prices.
// 4. Find the product with id 3.
// 5. Find all products with a price greater than 50.
// 6. Print the most expensive product.

async function task6() {
    const url = 'https://fakestoreapi.com/products';
    try {
        const res = await fetch(url);
        const products = await res.json();

        const names = products.map(val => val.title);
        console.log('Names:', names);

        const prices = products.map(val => val.price);
        console.log('Prices:', prices);

        const product = products.find(val => val.id === 3);
        console.log(product);

        const expensive = products.filter(val => val.price > 50);
        console.log(expensive);

        const mostExpensive = products.reduce((max, val) => val.price > max.price ? val : max);
        console.log('Most Expensive Product:', mostExpensive);

    } catch (error) {
        console.error('Error:', error.message);
    }
}
task6();