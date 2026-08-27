const employees = [
    { id: 1, name: 'Rahul', department: 'Engineering', salary: 50000, rating: 4 },
    { id: 2, name: 'Priya', department: 'Design', salary: 45000, rating: 5 },
    { id: 3, name: 'Amit', department: 'Engineering', salary: 60000, rating: 3 },
    { id: 4, name: 'Neha', department: 'HR', salary: 40000, rating: 2 },
    { id: 5, name: 'Karan', department: 'Engineering', salary: 55000, rating: 5 },
];

//Q1. Find the average salary of all employees.

const salary = employees.reduce((sum, val) => sum + val.salary, 0);
const averageSalary = salary / employees.length;

console.log(averageSalary);

//Q2. Find the highest-paid employee.
const highest = employees.reduce((max, val) => {
    return val.salary > max.salary ? val : max;
});
console.log(highest);


//Q3. Find all employees with a rating of 4 or above.

const rat = employees.filter(val => val.rating >= 4);

console.log(rat);

//Q4. Find the total salary expense for the Engineering department.


const esalary = employees.
    filter(val => val.department === "Engineering")
    .reduce((sum, num) => sum + num.salary, 0)

console.log(esalary);


//Q5. Find the average rating for each department.


//Q6. Find the employee with the highest rating.

const hrating = employees.reduce((max, e) => {
    return e.rating > max.rating ? e : max;
});

console.log(hrating);

//Q7.Create a new array containing only employee name, department and rating.

const newArr = employees.map(e => ({
    name: e.name,
    department: e.department,
    rating: e.rating
}));
console.log(newArr);