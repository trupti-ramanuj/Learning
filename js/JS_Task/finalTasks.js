// JAVASCRIPT PRACTICAL TASKS
// ===========================

// Instructions:
// - Solve each task using JavaScript.
// - Try to use the appropriate JavaScript methods wherever possible.
// - Do not modify the original array/object unless the task requires it.
// - Keep the code clean and readable.
// - Test your solution with the given data.
// - Handle basic edge cases where required.
// - Do not use external libraries.


// ======================================================================
// TASK 1
// ======================================================================

// DATA:

const products = [
    { id: 1, name: 'Laptop', price: 75000, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 1200, category: 'Electronics' },
    { id: 3, name: 'Chair', price: 8500, category: 'Furniture' },
    { id: 4, name: 'Desk', price: 12000, category: 'Furniture' },
    { id: 5, name: 'Lamp', price: 1800, category: 'Home' },
];

// TASKS:

// 1. Create an array containing only the product names.
// 2. Create an array containing only the product prices.
// 3. Find the product with id 3.
// 4. Find the index of the product with id 4.
// 5. Find all products with a price greater than 5000.
// 6. Calculate the total price of all products.


// ======================================================================
// TASK 2
// ======================================================================

// DATA:

const users = [
    { id: 1, name: 'Amit', age: 18 },
    { id: 2, name: 'Rahul', age: 25 },
    { id: 3, name: 'Priya', age: 31 },
    { id: 4, name: 'Neha', age: 22 },
    { id: 5, name: 'Raj', age: 16 },
];

//TASKS:

// 1. Find all users who are 18 or older.
// 2. Find the first user whose age is greater than 25.
// 3. Find the index of the user named 'Neha'.
// 4. Check whether any user is below 18.
// 5. Check whether every user is above 10.
// 6. Create a new array containing name and age only.


// ======================================================================
// TASK 3
// ======================================================================

// DATA:

const numbers = [12, 5, 8, 21, 16, 3, 10, 7];

// TASKS:

// 1. Find all even numbers.
// 2. Find all odd numbers.
// 3. Find numbers greater than 10.
// 4. Find the first number greater than 15.
// 5. Calculate the total of all numbers.
// 6. Calculate the average number.
// 7. Find the highest number.
// 8. Find the lowest number.


// ======================================================================
// TASK 4
// ======================================================================

// DATA:

const employees = [
    { id: 1, name: 'John', department: 'IT', salary: 60000 },
    { id: 2, name: 'Jane', department: 'HR', salary: 50000 },
    { id: 3, name: 'Bob', department: 'IT', salary: 75000 },
    { id: 4, name: 'Alice', department: 'Sales', salary: 55000 },
    { id: 5, name: 'Mark', department: 'IT', salary: 68000 },
];

// TASKS:

// 1. Find all employees from the IT department.
// 2. Find employees earning more than 60000.
// 3. Find the highest-paid employee.
// 4. Find the lowest-paid employee.
// 5. Calculate the average salary.
// 6. Create an array containing only employee names.


// ======================================================================
// TASK 5
// ======================================================================

// DATA:

const students = [
    { name: 'Amit', marks: 78 },
    { name: 'Rahul', marks: 45 },
    { name: 'Priya', marks: 92 },
    { name: 'Neha', marks: 65 },
    { name: 'Raj', marks: 32 },
];

// TASKS:

// 1. Find students who scored 50 or more.
// 2. Find students who failed.
// 3. Find the student with the highest marks.
// 4. Find the student with the lowest marks.
// 5. Calculate the average marks.
// 6. Create a new array containing:
//    {
//      name,
//      marks,
//      result
//    }
//    where result is "Pass" or "Fail".


// ======================================================================
// TASK 6
// ======================================================================

// DATA:

const transactions = [
    { id: 1, amount: 1200, type: 'debit' },
    { id: 2, amount: 5000, type: 'credit' },
    { id: 3, amount: 800, type: 'debit' },
    { id: 4, amount: 2500, type: 'credit' },
    { id: 5, amount: 600, type: 'debit' },
];

// TASKS:

// 1. Calculate total credit amount.
// 2. Calculate total debit amount.
// 3. Calculate the final balance.
// 4. Find the largest transaction.
// 5. Find all debit transactions above 700.
// 6. Find the average transaction amount.


// ======================================================================
// TASK 7
// ======================================================================

// DATA:

const expenses = [
    { category: 'Food', amount: 300 },
    { category: 'Travel', amount: 500 },
    { category: 'Food', amount: 250 },
    { category: 'Shopping', amount: 700 },
    { category: 'Travel', amount: 300 },
    { category: 'Food', amount: 150 },
];

// TASKS:

// 1. Filter all Food expenses.
// 2. Calculate total Food expense.
// 3. Calculate total Travel expense.
// 4. Calculate total Shopping expense.
// 5. Calculate total expense for every category.
// 6. Find the category with the highest total expense.


// ======================================================================
// TASK 8
// ======================================================================

// DATA:

const products = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 30000 },
    { id: 2, name: 'Shirt', category: 'Clothing', price: 1500 },
    { id: 3, name: 'Laptop', category: 'Electronics', price: 70000 },
    { id: 4, name: 'Shoes', category: 'Clothing', price: 3000 },
    { id: 5, name: 'Table', category: 'Furniture', price: 8000 },
];

// TASKS:

// 1. Group products by category.
// 2. Count how many products exist in each category.
// 3. Calculate the total price of products in each category.
// 4. Find the most expensive product in each category.
// 5. Find the category containing the most products.


// ======================================================================
// TASK 9
// ======================================================================

// DATA:

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
    { name: 'Emily', age: 35 },
    { name: 'Frank', age: 40 },
    { name: 'Grace', age: 27 },
];

// TASKS:

// 1. Calculate the average age.
// 2. Find the oldest person.
// 3. Find the youngest person.
// 4. Find all people between age 25 and 35.
// 5. Group people into:
//    20-29
//    30-39
//    40-49
// 6. Find which age group has the most people.


// ======================================================================
// TASK 10
// ======================================================================

// DATA:

const products = [
    { id: 1, title: 'Women Shirt', category: 'clothing', price: 30.50 },
    { id: 2, title: 'Men Trousers', category: 'clothing', price: 45.75 },
    { id: 3, title: 'Women Dress', category: 'clothing', price: 60.20 },
    { id: 4, title: 'Laptop', category: 'electronics', price: 75.99 },
    { id: 5, title: 'Headphones', category: 'electronics', price: 55.00 },
];

// TASK:

// Find products with a price greater than 40 and create a new array containing:

// {
//   title,
//   discountedPrice
// }

// Apply a 10% discount.

// The discounted price should contain exactly two decimal places.


// ======================================================================
// TASK 11
// ======================================================================

// DATA:

const temperatures = [0, 15, 30, 5, -10, 25];

// TASKS:

// 1. Create a new array containing Fahrenheit temperatures.
// 2. Use the formula:

// F = (C × 9/5) + 32

// 3. Create another array containing only temperatures above 20°C.
// 4. Find the highest Celsius temperature.
// 5. Find the average Celsius temperature.


// ======================================================================
// TASK 12
// ======================================================================

// DATA:

const users = [
    { id: 1, name: 'John', city: 'Ahmedabad' },
    { id: 2, name: 'Alice', city: 'Surat' },
    { id: 3, name: 'Bob', city: 'Ahmedabad' },
    { id: 4, name: 'Neha', city: 'Mumbai' },
    { id: 5, name: 'Raj', city: 'Surat' },
];

// TASKS:

// 1. Group users by city.
// 2. Count users in every city.
// 3. Find all users from Ahmedabad.
// 4. Find the city having the highest number of users.
// 5. Create an array containing unique city names.


// ======================================================================
// TASK 13
// ======================================================================

// DATA:

const orders = [
    { id: 1, customer: 'Amit', amount: 1200, status: 'delivered' },
    { id: 2, customer: 'Rahul', amount: 2500, status: 'pending' },
    { id: 3, customer: 'Amit', amount: 1800, status: 'delivered' },
    { id: 4, customer: 'Priya', amount: 900, status: 'cancelled' },
    { id: 5, customer: 'Rahul', amount: 3200, status: 'delivered' },
];

// TASKS:

// 1. Find all delivered orders.
// 2. Calculate total delivered order amount.
// 3. Count orders by status.
// 4. Calculate total order amount for each customer.
// 5. Find the customer with the highest total order amount.
// 6. Find customers who have more than one order.


// ======================================================================
// TASK 14
// ======================================================================

// DATA:

const cart = [
    { productId: 1, name: 'Phone', price: 30000, quantity: 1 },
    { productId: 2, name: 'Mouse', price: 1200, quantity: 2 },
    { productId: 3, name: 'Keyboard', price: 2500, quantity: 1 },
];

// TASKS:

// 1. Calculate the subtotal of every cart item.
// 2. Calculate the total cart amount.
// 3. Calculate the total number of products in the cart.
// 4. Find the cart item with the highest subtotal.
// 5. Apply a 10% discount if the total is greater than 30000.
// 6. Calculate the final amount after discount.


// ======================================================================
// TASK 15
// ======================================================================

// DATA:

const users = [
    { id: 1, name: 'Amit', age: 18, active: true },
    { id: 2, name: 'Rahul', age: 25, active: false },
    { id: 3, name: 'Priya', age: 31, active: true },
    { id: 4, name: 'Neha', age: 22, active: true },
];

// TASKS:

// 1. Find all active users.
// 2. Find all inactive users.
// 3. Find active users above age 20.
// 4. Check whether any inactive user exists.
// 5. Check whether all active users are above age 18.
// 6. Create a new array with:
//    {
//      name,
//      status: "Active" / "Inactive"
//    }


// ======================================================================
// TASK 16
// ======================================================================

// DATA:

const employees = [
    { id: 1, name: 'John', department: 'IT', salary: 65000 },
    { id: 2, name: 'Jane', department: 'IT', salary: 75000 },
    { id: 3, name: 'Bob', department: 'HR', salary: 50000 },
    { id: 4, name: 'Alice', department: 'IT', salary: 80000 },
    { id: 5, name: 'Mark', department: 'HR', salary: 55000 },
];

// TASKS:

// 1. Find all IT employees.
// 2. Sort IT employees by salary from highest to lowest.
// 3. Display the top 2 highest-paid IT employees.
// 4. Calculate the average IT salary.
// 5. Calculate the total salary expense for IT.
// 6. Find the highest-paid employee in each department.


// ======================================================================
// TASK 17
// ======================================================================

// DATA:

const numbers = [10, 20, 10, 30, 20, 40, 50, 30, 10];

// TASKS:

// 1. Remove duplicate numbers.
// 2. Count how many times each number appears.
// 3. Find the number that appears most frequently.
// 4. Find numbers that appear more than once.
// 5. Sort the unique numbers in ascending order.


// ======================================================================
// TASK 18
// ======================================================================

// DATA:

const words = [
    'javascript',
    'react',
    'javascript',
    'html',
    'css',
    'react',
    'javascript',
    'html'
];

// TASKS:

// 1. Count the frequency of every word.
// 2. Find the most frequently used word.
// 3. Find all words that appear more than once.
// 4. Sort words by frequency from highest to lowest.
// 5. Solve the frequency calculation using reduce.


// ======================================================================
// TASK 19
// ======================================================================

// DATA:

const products = [
    { id: 1, name: 'Phone', price: 30000 },
    { id: 2, name: 'Laptop', price: 80000 },
    { id: 3, name: 'Mouse', price: 1200 },
    { id: 4, name: 'Keyboard', price: 2500 },
];

// TASKS:

// 1. Sort products by price ascending.
// 2. Sort products by price descending.
// 3. Sort products alphabetically by name.
// 4. Find the two most expensive products.
// 5. Create a new sorted array without changing the original products array.


// ======================================================================
// TASK 20
// ======================================================================

// DATA:

const students = [
    {
        name: 'Amit',
        marks: {
            maths: 80,
            science: 75,
            english: 90
        }
    },
    {
        name: 'Rahul',
        marks: {
            maths: 65,
            science: 70,
            english: 60
        }
    },
    {
        name: 'Priya',
        marks: {
            maths: 95,
            science: 90,
            english: 92
        }
    }
];

// TASKS:

// 1. Calculate total marks for every student.
// 2. Calculate average marks for every student.
// 3. Find the student with the highest total.
// 4. Calculate the average marks for Maths.
// 5. Calculate the average marks for Science.
// 6. Calculate the average marks for English.
// 7. Find which subject has the highest average.


// ======================================================================
// TASK 21
// ======================================================================

// DATA:

const orders = [
    {
        id: 1,
        items: [
            { name: 'Phone', price: 30000, quantity: 1 },
            { name: 'Cover', price: 500, quantity: 2 }
        ]
    },
    {
        id: 2,
        items: [
            { name: 'Laptop', price: 80000, quantity: 1 },
            { name: 'Mouse', price: 1200, quantity: 2 }
        ]
    }
];

// TASKS:

// 1. Calculate the total amount of each order.
// 2. Calculate the total revenue from all orders.
// 3. Find the most expensive item.
// 4. Find the total quantity of all products sold.
// 5. Create one flat array containing all order items.


// ======================================================================
// TASK 22
// ======================================================================

// DATA:

const transactions = [
    { id: 1, amount: 120.50, type: 'debit', category: 'Shopping', date: '2024-01-15' },
    { id: 2, amount: 80.20, type: 'credit', category: 'Salary', date: '2024-01-10' },
    { id: 3, amount: 25.00, type: 'debit', category: 'Food', date: '2024-01-08' },
    { id: 4, amount: 150.75, type: 'debit', category: 'Entertainment', date: '2024-01-20' },
    { id: 5, amount: 200.00, type: 'credit', category: 'Bonus', date: '2024-01-05' },
    { id: 6, amount: 45.50, type: 'debit', category: 'Utilities', date: '2024-01-18' },
    { id: 7, amount: 90.00, type: 'credit', category: 'Refund', date: '2024-01-12' },
    { id: 8, amount: 35.25, type: 'debit', category: 'Groceries', date: '2024-01-22' },
    { id: 9, amount: 60.80, type: 'credit', category: 'Gift', date: '2024-01-03' },
    { id: 10, amount: 70.10, type: 'debit', category: 'Health', date: '2024-01-14' },
];

// TASKS:

// 1. Calculate the total balance.
// 2. Filter transactions after 2024-01-10.
// 3. Find the average amount of credit transactions.
// 4. Sort transactions by amount ascending.
// 5. Calculate total spending for each debit category.
// 6. Find the category with the highest total spending.


// ======================================================================
// TASK 23
// ======================================================================

// DATA:

const countries = [
    { name: 'USA', population: 331000000, area: 9833517 },
    { name: 'China', population: 1444216107, area: 9596961 },
    { name: 'India', population: 1393409038, area: 3287263 },
];

// TASKS:

// 1. Calculate population density for every country.
// 2. Create a new array containing:
//    {
//      name,
//      density
//    }
// 3. Find the country with the highest population density.
// 4. Find the country with the lowest population density.
// 5. Calculate the sum of the population densities.


// ======================================================================
// TASK 24
// ======================================================================

// DATA:

const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Alice', email: 'alice@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },
];

const orders = [
    { id: 101, userId: 1, amount: 1200 },
    { id: 102, userId: 2, amount: 2000 },
    { id: 103, userId: 1, amount: 1500 },
];

// TASKS:

// 1. Find users who have placed orders.
// 2. Create an array containing their email addresses.
// 3. Find users who have not placed any orders.
// 4. Calculate total amount spent by each user.
// 5. Find the user who spent the most.


// ======================================================================
// TASK 25
// ======================================================================

// DATA:

const products = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 30000 },
    { id: 2, name: 'Laptop', category: 'Electronics', price: 80000 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1500 },
];

const cart = [
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 3 },
];

// TASKS:

// 1. Match cart products with product details.
// 2. Calculate subtotal for each cart item.
// 3. Calculate total cart value.
// 4. Find the most expensive cart item.
// 5. Create a final array containing:
//    {
//      productId,
//      name,
//      quantity,
//      price,
//      subtotal
//    }


// ======================================================================
// TASK 26
// ======================================================================

// DATA:

const expenses = [
    { category: 'Food', amount: 300 },
    { category: 'Food', amount: 500 },
    { category: 'Travel', amount: 700 },
    { category: 'Travel', amount: 300 },
    { category: 'Shopping', amount: 900 },
];

// TASK:

// Create a reusable function:

// getCategoryTotal(expenses, category)

// The function should:

// 1. Accept the expense array.
// 2. Accept a category.
// 3. Return the total amount for that category.
// 4. Return 0 if the category does not exist.


// ======================================================================
// TASK 27
// ======================================================================

// DATA:

const products = [
    { id: 1, name: 'Phone', price: 30000, stock: 5 },
    { id: 2, name: 'Laptop', price: 80000, stock: 2 },
    { id: 3, name: 'Mouse', price: 1200, stock: 0 },
    { id: 4, name: 'Keyboard', price: 2500, stock: 10 },
];

// TASKS:

// 1. Find all products that are in stock.
// 2. Find all products that are out of stock.
// 3. Calculate total inventory value using price × stock.
// 4. Find the product with the highest stock.
// 5. Find the product with the lowest stock.
// 6. Calculate the total number of items in stock.


// ======================================================================
// TASK 28
// ======================================================================

// DATA:

const users = [
    { id: 1, name: 'Amit', age: 8 },
    { id: 2, name: 'Rahul', age: 15 },
    { id: 3, name: 'Priya', age: 24 },
    { id: 4, name: 'Neha', age: 37 },
    { id: 5, name: 'Raj', age: 43 },
    { id: 6, name: 'Kiran', age: 19 },
    { id: 7, name: 'Jay', age: 31 },
];

// TASKS:

// 1. Group users into:
//    0-9
//    10-19
//    20-29
//    30-39
//    40-49
// 2. Use reduce for the grouping.
// 3. Count users in every group.
// 4. Find the group containing the highest number of users.


// ======================================================================
// TASK 29
// ======================================================================

// DATA:

const products = [
    { id: 1, name: 'Phone', price: 30000, rating: 4.5 },
    { id: 2, name: 'Laptop', price: 80000, rating: 4.8 },
    { id: 3, name: 'Mouse', price: 1200, rating: 3.9 },
    { id: 4, name: 'Keyboard', price: 2500, rating: 4.2 },
    { id: 5, name: 'Monitor', price: 18000, rating: 4.6 },
];

// TASKS:

// 1. Find products with rating 4 or above.
// 2. Find products with price below 20000.
// 3. Find products with rating above 4 and price below 50000.
// 4. Find the highest-rated product.
// 5. Find the cheapest product with a rating above 4.
// 6. Sort products by rating descending.


// ======================================================================
// TASK 30
// ======================================================================

// DATA:

const employees = [
    { name: 'John', department: 'IT', salary: 70000 },
    { name: 'Jane', department: 'HR', salary: 55000 },
    { name: 'Bob', department: 'IT', salary: 85000 },
    { name: 'Alice', department: 'Sales', salary: 60000 },
    { name: 'Mark', department: 'IT', salary: 75000 },
    { name: 'Sara', department: 'HR', salary: 65000 },
];

// TASKS:

// 1. Group employees by department.
// 2. Calculate employee count per department.
// 3. Calculate average salary per department.
// 4. Calculate total salary expense per department.
// 5. Find the highest-paid employee in every department.
// 6. Find the department with the highest total salary expense.


// ======================================================================
// TASK 31
// ======================================================================

// DATA:

const orders = [
    { id: 1, amount: 1000, date: '2025-01-10' },
    { id: 2, amount: 1500, date: '2025-01-25' },
    { id: 3, amount: 900, date: '2025-02-11' },
    { id: 4, amount: 2000, date: '2025-02-20' },
    { id: 5, amount: 500, date: '2025-03-01' },
];

// TASKS:

// 1. Find all orders from January 2025.
// 2. Find all orders from February 2025.
// 3. Group orders by month.
// 4. Calculate total revenue for every month.
// 5. Calculate average order amount for every month.
// 6. Find the month with the highest revenue.


// ======================================================================
// TASK 32
// ======================================================================

// DATA:

const students = [
    { name: 'Amit', marks: [80, 75, 90] },
    { name: 'Rahul', marks: [65, 70, 60] },
    { name: 'Priya', marks: [95, 90, 92] },
];

// TASKS:

// 1. Calculate total marks for every student.
// 2. Calculate average marks for every student.
// 3. Find the topper.
// 4. Find students whose average is above 75.
// 5. Find the highest individual mark.
// 6. Find the lowest individual mark.


// ======================================================================
// TASK 33
// ======================================================================

// DATA:

const users = [
    { id: 1, name: 'John', role: 'admin' },
    { id: 2, name: 'Alice', role: 'editor' },
    { id: 3, name: 'Bob', role: 'viewer' },
];

const permissions = {
    admin: ['create', 'read', 'update', 'delete'],
    editor: ['read', 'update'],
    viewer: ['read'],
};

// TASKS:

// 1. Write a function canAccess(userId, permission).
// 2. Return true if the user's role has the requested permission.
// 3. Find all users who can update.
// 4. Find all users who can delete.
// 5. Find all users who can only read.


// ======================================================================
// TASK 34
// ======================================================================

// DATA:

const posts = [
    { id: 1, title: 'JavaScript Basics', authorId: 101 },
    { id: 2, title: 'React Basics', authorId: 102 },
    { id: 3, title: 'Array Methods', authorId: 101 },
];

const comments = [
    { id: 1, postId: 1, text: 'Great post' },
    { id: 2, postId: 1, text: 'Very useful' },
    { id: 3, postId: 2, text: 'Nice article' },
];

// TASKS:

// 1. Add commentCount to every post.
// 2. Find the post with the most comments.
// 3. Find posts with zero comments.
// 4. Count comments for every post.
// 5. Create an object where post ID is the key and comment count is the value.


// ======================================================================
// TASK 35
// ======================================================================

// DATA:

const names = [
    '  john doe ',
    'JANE SMITH',
    'alice   johnson',
    '',
    '   bob brown'
];

// TASKS:

// 1. Remove unnecessary spaces.
// 2. Remove empty names.
// 3. Convert names into title case.
// 4. Replace multiple spaces with one space.
// 5. Sort the final names alphabetically.
// 6. Do not modify the original array.


// ======================================================================
// TASK 36
// ======================================================================

// DATA:

const products = [
    { id: 1, name: 'Phone', category: 'mobile', price: 70000 },
    { id: 2, name: 'Laptop', category: 'laptop', price: 100000 },
    { id: 3, name: 'Tablet', category: 'tablet', price: 40000 },
    { id: 4, name: 'Monitor', category: 'electronics', price: 25000 },
];

// TASK:

// Create a reusable search/filter function that supports:

// 1. Search by product name.
// 2. Filter by category.
// 3. Minimum price.
// 4. Maximum price.
// 5. Any combination of the above filters.
// 6. Return an empty array if nothing matches.


// ======================================================================
// TASK 37
// ======================================================================

// DATA:

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
];

// TASK:

// Create a pagination function.

// The function should accept:

// page
// limit

// Return:

// {
//   data: [],
//   currentPage,
//   totalItems,
//   totalPages,
//   hasNextPage,
//   hasPreviousPage
// }

// Also handle invalid page numbers.


// ======================================================================
// TASK 38
// ======================================================================

// DATA:

const apiData = [
    { user_id: 1, first_name: 'John', last_name: 'Doe', status: 'active' },
    { user_id: 2, first_name: 'Jane', last_name: 'Smith', status: 'inactive' },
    { user_id: 3, first_name: 'Bob', last_name: 'Brown', status: 'active' },
];

// TASK:

// Transform the data into:

// {
//   id,
//   fullName,
//   isActive
// }

// Requirements:

// 1. Combine first_name and last_name.
// 2. Convert status into a boolean.
// 3. Do not modify the original data.
// 4. Create a separate version containing only active users.


// ======================================================================
// TASK 39
// ======================================================================

// DATA:

const cartItems = [
    { productId: 1, name: 'Phone', quantity: 1 },
    { productId: 2, name: 'Mouse', quantity: 2 },
    { productId: 1, name: 'Phone', quantity: 3 },
    { productId: 3, name: 'Keyboard', quantity: 1 },
    { productId: 2, name: 'Mouse', quantity: 1 },
];

// TASKS:

// 1. Remove duplicate products.
// 2. Merge duplicate products.
// 3. Add quantities together.
// 4. Find the product with the highest total quantity.
// 5. Solve the problem using reduce.


// ======================================================================
// TASK 40
// ======================================================================

// DATA:

const currentPermissions = ['read', 'write', 'delete'];
const newPermissions = ['read', 'update', 'delete'];

// TASKS:

// 1. Find permissions that were added.
// 2. Find permissions that were removed.
// 3. Find permissions that remain unchanged.
// 4. Return:

// {
//   added: [],
//   removed: [],
//   unchanged: []
// }


// ======================================================================
// TASK 41
// ======================================================================

// DATA:

const user = {
    id: 1,
    profile: {
        personal: {
            name: 'John',
            address: {
                city: 'Ahmedabad',
                pin: 380001
            }
        }
    }
};

// TASKS:

// 1. Access the user's city safely.
// 2. Access a property that does not exist without causing an error.
// 3. Write a reusable function:

// getValue(object, path)

// Example:

// getValue(user, 'profile.personal.address.city')

// 4. Return a default value if the path does not exist.


// ======================================================================
// TASK 42
// ======================================================================

// DATA:

const menu = [
    {
        id: 1,
        title: 'Dashboard',
        children: []
    },
    {
        id: 2,
        title: 'Settings',
        children: [
            {
                id: 3,
                title: 'Profile',
                children: []
            },
            {
                id: 4,
                title: 'Security',
                children: [
                    {
                        id: 5,
                        title: 'Password',
                        children: []
                    }
                ]
            }
        ]
    }
];

// TASKS:

// 1. Find a menu item by id.
// 2. Find item id 5.
// 3. Return the complete path of item id 5.
// 4. Count total menu items.
// 5. Find the maximum nesting level.


// ======================================================================
// TASK 43
// ======================================================================

// TASK:

Create a function called createCounter().

// Requirements:

// 1. Counter starts at 0.
// 2. Provide increment().
// 3. Provide decrement().
// 4. Provide getValue().
// 5. Provide reset().
// 6. Counter value should remain private.
// 7. Create two counters and verify that they have separate values.


// ======================================================================
// TASK 44
// ======================================================================

// TASK:

// Create a reusable debounce function.

// Requirements:

// 1. Accept a callback and delay.
// 2. The callback should execute only after the user stops calling the function.
// 3. Repeated calls should reset the timer.
// 4. Test it with a search input.
// 5. Log the final search value.


// ======================================================================
// TASK 45
// ======================================================================

// TASK:

// Create a simple shopping cart using JavaScript.

// Requirements:

// 1. Add product.
// 2. Remove product.
// 3. Increase quantity.
// 4. Decrease quantity.
// 5. Prevent quantity from going below 1.
// 6. Calculate total quantity.
// 7. Calculate total price.
// 8. Prevent duplicate product entries.
// 9. Clear the cart.


// ======================================================================
// TASK 46
// ======================================================================

// TASK:

// Use the Fake Store API:

// https://fakestoreapi.com/products

// TASKS:

// 1. Fetch all products.
// 2. Print the products.
// 3. Create an array containing product titles.
// 4. Find a product by id.
// 5. Find the index of a product by id.
// 6. Filter products with price greater than 50.
// 7. Find the most expensive product.
// 8. Calculate the total price.
// 9. Group products by category.
// 10. Handle API errors using try/catch.


// ======================================================================
// TASK 47
// ======================================================================

// TASK:

// Use:

// https://jsonplaceholder.typicode.com/users

// https://jsonplaceholder.typicode.com/posts

// TASKS:

// 1. Fetch users.
// 2. Fetch posts.
// 3. Fetch both APIs using Promise.all.
// 4. Find how many posts each user has.
// 5. Find the user with the most posts.
// 6. Find users who have no posts.
// 7. Add the user's name to every post.


// ======================================================================
// TASK 48
// ======================================================================

// TASK:

// Create a function:

// fetchUser(id)

// Requirements:

// 1. Fetch a user from:
//    https://jsonplaceholder.typicode.com/users/{id}
// 2. Use async/await.
// 3. Handle HTTP errors.
// 4. Handle network errors.
// 5. Return the user data on success.
// 6. Return a meaningful error on failure.
// 7. Test with an existing user id.
// 8. Test with an invalid user id.


// ======================================================================
// TASK 49
// ======================================================================

// CODE:

const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => {
    number * 2;
});

console.log(result);

// TASKS:

// 1. Predict the output.
// 2. Identify the problem.
// 3. Fix the code.
// 4. Explain why the original code behaves that way.


// ======================================================================
// TASK 50
// ======================================================================

// CODE:

const products = [
    { id: 1, price: 100 },
    { id: 2, price: 50 },
    { id: 3, price: 200 }
];

const sortedProducts = products.sort((a, b) => a.price - b.price);

console.log(products);
console.log(sortedProducts);

// TASKS:

// 1. Predict the output.
// 2. Explain what happened to the original array.
// 3. Fix the code so the original array remains unchanged.


// ======================================================================
// TASK 51
// ======================================================================

// CODE:

const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
    sum + number;
}, 0);

console.log(total);

// TASKS:

// 1. Predict the output.
// 2. Identify the issue.
// 3. Correct the reduce logic.
// 4. Explain the role of the return value inside reduce.


// ======================================================================
// TASK 52
// ======================================================================

// CODE:

const user = {
    name: 'John',
    age: 0
};

const age = user.age || 18;

console.log(age);

T//TASKS:

// 1. Predict the output.
// 2. Explain why the result may not be what the developer expects.
// 3. Correct the code so that age 0 remains valid.


// ======================================================================
// TASK 53
// ======================================================================

// CODE:

const user = null;

console.log(user.profile.name);

// TASKS:

// 1. Predict what happens.
// 2. Fix the code using optional chaining.
// 3. Return "Guest" if the name does not exist.


// ======================================================================
// TASK 54
// ======================================================================

// CODE:

async function getData() {
    const response = fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = response.json();

    console.log(data);
}

getData();

// TASKS:

// 1. Identify the problems.
// 2. Correct the code using async/await.
// 3. Add error handling.


// ======================================================================
// TASK 55
// ======================================================================

// CODE:

const ids = [1, 2, 3];

ids.forEach(async (id) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user = await response.json();

    console.log(user.name);
});

console.log('Finished');

// TASKS:

// 1. Explain why "Finished" can appear before the user names.
// 2. Rewrite the code so all requests finish before "Finished".
// 3. Create a version where requests run in parallel.


// ======================================================================
// TASK 56
// ======================================================================

// CODE:

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

// TASKS:

// 1. Predict the output.
// 2. Explain why it happens.
// 3. Fix the code using let.
// 4. Fix it without changing var.


// ======================================================================
// TASK 57
// ======================================================================

// CODE:

const originalUser = {
    name: 'John',
    address: {
        city: 'Ahmedabad'
    }
};

const copiedUser = { ...originalUser };

copiedUser.address.city = 'Surat';

console.log(originalUser.address.city);

// TASKS:

// 1. Predict the output.
// 2. Explain why the original object changes.
// 3. Create a proper deep copy.
// 4. Test the copied object again.


// ======================================================================
// TASK 58
// ======================================================================

// CODE:

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
});

console.log('D');

// TASKS:

// 1. Predict the exact output order.
// 2. Explain why the output occurs in that order.
// 3. Identify which callback runs first and why.


// ======================================================================
// TASK 59
// ======================================================================

// DATA:

const values = [
    0,
    1,
    '',
    'hello',
    null,
    undefined,
    false,
    true,
    [],
    {},
    NaN
];

// TASKS:

// 1. Separate the values into truthy and falsy values.
// 2. Explain why an empty array is truthy.
// 3. Explain why an empty object is truthy.
// 4. Explain why NaN is falsy.
// 5. Write a function that checks whether a value is actually empty without treating 0 as empty.


// ======================================================================
// TASK 60 — FINAL PRACTICAL TASK
// ======================================================================

DATA:

const products = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 30000, rating: 4.5, stock: 5 },
    { id: 2, name: 'Laptop', category: 'Electronics', price: 80000, rating: 4.8, stock: 2 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1500, rating: 4.1, stock: 10 },
    { id: 4, name: 'Shoes', category: 'Clothing', price: 3000, rating: 4.3, stock: 0 },
    { id: 5, name: 'Chair', category: 'Furniture', price: 8000, rating: 4.6, stock: 4 },
];

// TASK:

// Create the JavaScript logic for a product listing page.

// Requirements:

// 1. Display all products.
// 2. Search products by name.
// 3. Filter products by category.
// 4. Filter products by minimum price.
// 5. Filter products by maximum price.
// 6. Sort products by price ascending.
// 7. Sort products by price descending.
// 8. Sort products by rating.
// 9. Show only products that are in stock.
// 10. Find the most expensive product.
// 11. Find the highest-rated product.
// 12. Calculate the total inventory value.
// 13. Calculate the number of products in each category.
// 14. Add a product to a cart.
// 15. Prevent duplicate products in the cart.
// 16. Increase product quantity.
// 17. Decrease product quantity.
// 18. Remove a product from the cart.
// 19. Calculate cart total.
// 20. Calculate total number of items in the cart.
// 21. Apply a 10% discount when cart total is above 50000.
// 22. Keep the original products array unchanged.
// 23. Handle an empty search result.
// 24. Handle an empty cart.
// 25. Split the logic into reusable functions.


======================================================================
END OF TASKS
======================================================================
