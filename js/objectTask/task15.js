const products = [
    {
        id: 1,
        name: "Laptop",
        price: 70000,
        stock: 5
    },
    {
        id: 2,
        name: "Mouse",
        price: 1500,
        stock: 20
    },
    {
        id: 3,
        name: "Keyboard",
        price: 3000,
        stock: 0
    },
    {
        id: 4,
        name: "Monitor",
        price: 15000,
        stock: 3
    },

];

function findProductById(products, id) {
    return products.find(product => product.id === id)
};
const productId = findProductById(products, 4);
// console.log(productId);

//2

function getProductsInStock(products) {
    return products.filter(products => products.stock > 0)
};
const aveleblsStocks = getProductsInStock(products);
console.log(aveleblsStocks);

//3
function getProductsOutOfStock(products) {
    return products.filter(products => products.stock === 0)
};
const outOfStocks = getProductsOutOfStock(products);
console.log(outOfStocks);

//4
function getProductsAbovePrice(products, price) {
    return products.filter(product => product.price > price)
};
const MorethanePrice = getProductsAbovePrice(products);
console.log(MorethanePrice);
//5
const cheapest = products.reduce((min, product) => {
    return product.price > min.price ? product : min;

});
console.log(cheapest);
//6
const expensive = products.reduce((max, product) => {
    return product.price > max.price ? product : max;

});

console.log(expensive);


//7
const total = products.reduce((sum, num) => {

    return sum + (num.price) * (num.stock);

}, 0);

console.log(total);
