async function task12() {
    const userId = 2;

    const userUrl =
        `https://jsonplaceholder.typicode.com/users/${userId}`;

    const todosUrl =
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    try {
        const [u, t] = await Promise.all([
            fetch(userUrl),
            fetch(todosUrl)
        ]);
        const user = await u.json();
        console.log('Name:', user.name);



        const todos = await t.json();
        console.log('Total Todos:', todos.length);

        const completed = todos.filter((t) => t.completed).length;
        console.log('Completed Todos:', completed);

        const pending = todos.filter((t) => !t.completed).length;
        console.log('Pending Todos:', pending);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
task12();