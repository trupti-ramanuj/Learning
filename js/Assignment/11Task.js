const employees = [
    { name: 'Rahul', salary: 50000, active: true },
    { name: 'Priya', salary: 45000, active: false },
    { name: 'Amit', salary: 60000, active: true },
];

//Q1. Find all bugs in the function.
// Q2.Fix the function.

// Q3.Make it work correctly with an empty array.
function getActiveSalary(employees) {
    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].active === true) {
            total += employees[i].salary;
        }
    }

    return total;
}

console.log(getActiveSalary(employees));
console.log(getActiveSalary([]));

//Q4. Explain why the original code produces an incorrect result.

//let total;
//total === undefined
// then
// total += employees[i].salary;
// undefined + 50000 // NaN




//Q5. Modify the function so it returns the average salary of active employees.
