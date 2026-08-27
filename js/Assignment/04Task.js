const users = [
    { id: 101, name: 'Rahul', email: 'rahul@example.com' },
    { id: 102, name: 'Priya', email: 'priya@example.com' },
    { id: 103, name: 'Amit', email: 'amit@example.com' },
    { id: 104, name: 'Neha', email: 'neha@example.com' },
];

const products = [
    { id: 1, name: 'Keyboard', price: 25, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 15, category: 'Electronics' },
    { id: 3, name: 'Notebook', price: 10, category: 'Stationery' },
    { id: 4, name: 'T-Shirt', price: 20, category: 'Clothing' },
];

const orders = [
    {
        orderId: 'ORD001',
        userId: 101,
        products: [
            { productId: 1, quantity: 2 },
            { productId: 3, quantity: 1 },
        ],
    },
    {
        orderId: 'ORD002',
        userId: 102,
        products: [
            { productId: 4, quantity: 2 },
        ],
    },
    {
        orderId: 'ORD003',
        userId: 101,
        products: [
            { productId: 2, quantity: 1 },
            { productId: 3, quantity: 3 },
        ],
    },
];

// Q1.  Find the total cost of every order.
const orderTotal = orders.map((val) => {
    const total = val.products.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);

        return sum + product.price * item.quantity;
    }, 0);
    return {
        orderId: val.orderId,
        total
    };
});
console.log(orderTotal);

//Q2. Find the total amount spent by every user.

//Q3. Find the user who has spent the most money.

//Q4. Find all users who have placed at least one order.
const userOrder = users.filter(val =>
    orders.some(vlaue => vlaue.userId === val.id)
);

console.log(userOrder);

//Q5. Map the user names to the orders they placed.
const Map = orders.map(val => {
    const user = users.find(use => use.id === val.userId);

    return {
        orderId: val.orderId,
        userName: user ? user.name : 'Unknown User'
    };
});

console.log(Map);

//Q6. Find all orders containing more than one product type.
const multipleOrders = orders.filter(
    order => order.products.length > 1
);

console.log(multipleOrders);

//Q7. Find the total quantity of products sold across all orders.

const totalSold = orders.reduce((t, o) => {
    const q = o.products.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return t + q
}, 0);

console.log(totalSold);

//Q8. Find the most frequently ordered product.