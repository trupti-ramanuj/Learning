const cart = [
    { productId: 1, name: 'Keyboard', price: 2500, quantity: 2 },
    { productId: 2, name: 'Mouse', price: 1200, quantity: 1 },
    { productId: 3, name: 'USB Cable', price: 500, quantity: 3 },
];

// Q1. Calculate the subtotal
const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0);

console.log(subtotal);


// Q2. Add a new product to the cart
cart.push({
    productId: 4,
    name: 'Headphones',
    price: 3000,
    quantity: 1
});

console.log(cart);


// Q3. Increase quantity of an existing product


const increase = cart.find((item) => item.productId === 2);

if (increase) {
    increase.quantity += 1;
}

console.log(cart);


// Q4. Decrease quantity of an existing product


const decrease = cart.find(item => item.productId === 3);

if (decrease) {
    if (decrease.quantity > 1) {
        decrease.quantity -= 1;
    }
}

console.log(cart);


// Q5. Remove a product using productId


const product = cart.some(item => item.productId === 2);

if (product) {
    const index = cart.findIndex(item => item.productId === 2);
    cart.splice(index, 1);
}

console.log(cart);


// Q6. Find total number of items
const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
);

console.log(totalItems);


// Q7. Find the most expensive product
const expensive = cart.reduce((max, item) =>
    item.price > max.price ? item : max
);

console.log(expensive);


// Q8. Apply 10% discount if subtotal >= 5000


const discount = subtotal >= 5000
    ? subtotal * 0.10
    : 0;

console.log(discount);


// Q9. Calculate final payable amount
const finalAmount = subtotal - discount;

console.log(finalAmount);


// Q10. Handle removing a product that doesn't exist


const index = cart.findIndex(
    item => item.productId === 99
);

if (index !== 1) {
    console.log("Product does not exist in the cart.");
} else {
    cart.splice(index, 1);
}