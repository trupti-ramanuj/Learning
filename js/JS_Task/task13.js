async function task13(userId = 4) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const todosUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

    try {
        const [u, p, t] = await Promise.all([
            fetch(userUrl),
            fetch(postsUrl),
            fetch(todosUrl)
        ]);
        const user = await u.json();
        console.log('Name:', user.name);

        const posts = await p.json();
        console.log('Total Posts:', posts.length);

        const todos = await t.json();
        console.log('Total Todos:', todos.length);
        const completed = todos.filter((t) => t.completed).length;
        console.log('Completed Todos:', completed);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
task13();