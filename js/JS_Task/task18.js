async function getUserSummary(userId) {

    // const userId = 1;
    const userUrl =
        `https://jsonplaceholder.typicode.com/users/${userId}`;

    const postsUrl =
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    const todosUrl =
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

    const [u, p, t] = await Promise.all([
        fetch(userUrl),
        fetch(postsUrl),
        fetch(todosUrl)
    ]);
    const user = await u.json();
    const posts = await p.json();
    const todos = await t.json();


    const completed = todos.filter((todo) => todo.completed).length;
    return {
        name: user.name,
        email: user.email,
        posts: posts.length,
        todos: todos.length,
        completed: completed,
        pending: todos.length - completed,
    };
}
async function task18() {
    try {
        const summary = await getUserSummary(1);
        console.log(summary);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
task18();
