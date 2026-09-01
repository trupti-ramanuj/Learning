// TASKS:

// 1. Fetch all todos from the API.
// 2. Find all completed todos.
// 3. Find all pending todos.
// 4. Print the total number of completed todos.
// 5. Print the total number of pending todos.
// 6. Print the title of the first completed todo.

async function task5() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const res = await fetch(url);
        const todos = await res.json();

        const cTodos = todos.filter(val => val.completed);
        console.log('Completed Todos:', cTodos);
        console.log('Total Completed Todos:', cTodos.length);
        const pTodos = todos.filter(val => !val.completed);
        console.log('Pending Todos:', pTodos);
        console.log('Total Pending Todos:', pTodos.length);

        const fct = cTodos[0];
        console.log('First completed todo title:', fct?.title);

    } catch (error) {
        console.error('Error:', error.message);
    }
}
task5();