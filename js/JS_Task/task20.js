async function getUserDashboard(userId) {
    const userUrl =
        `https://jsonplaceholder.typicode.com/users/${userId}`;

    const postsUrl =
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    const todosUrl =
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

    try {
        const [u, p, t] = await Promise.all([
            fetch(userUrl),
            fetch(postsUrl),
            fetch(todosUrl)
        ]);
        const user = await u.json();
        const posts = await p.json();
        const todos = await t.json();

        const completed = todos.filter((t) => t.completed).length;
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                city: user.address?.city || '',
            },
            statistics: {
                totalPosts: posts.length,
                totalTodos: todos.length,
                completedTodos: completed,
                pendingTodos: todos.length - completed
            },
        };
    } catch (error) {
        console.error('Error fetching user dashboard for user ${userId}:', error.message);
        return null;
    }
}
async function task20() {
    const dashboard = await getUserDashboard(1);
    console.log(dashboard);

    const dashboard2 = await getUserDashboard(5);
    
    console.log(dashboard2);
}
task20();