// Step 1: Fetch data from the API
// Step 2: Use the map method to create a new array of product names
// Step 3: Use the find method to find a product by its id
// Step 4: Use the findIndex method to find the index of a product by its id
// Step 5: Use the reduce method to calculate the total price of all products  
// Step 6: Use the fetch method to get a specific product by id
// Step 7: Use the filter method to filter products based on a condition

async function product() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const products = await res.json();

        const Name = await products.map(p => p.title);

        console.log(Name);

        const productById = products.find(p => p.id === 2);
        console.log(productById);

        const productIndex = products.findIndex(p => p.id === 2);
        console.log(productIndex);

        const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
        console.log(totalPrice);

        const res2 = await fetch('https://fakestoreapi.com/products/2');
        const productById2 = await res2.json();
        console.log(productById2);

        const filteredProducts = products.filter(p => p.price > 100);
        console.log(filteredProducts);
    } catch (error) {
        console.log('Error:', error);
    }

}
product()

// //fetch customers from fakestore api, group by customers as per their age.

// async function fetchCustomers() {
//     try {
//         const res = await fetch('https://fakestoreapi.com/users');
//         const customers = await res.json();
//         const customersByAge = customers.reduce((acc, customer) => {
      
//             if (!acc[customer.age]) {
//                 acc[customer.age] = [];
//             }
//             acc[customer.age].push(customer.Name);
//             return acc;
//         }, {});
//         console.log(customersByAge);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// fetchCustomers();
