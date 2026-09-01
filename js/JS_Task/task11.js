async function task11() {
    const userId = 3;

    const userUrl =
        `https://jsonplaceholder.typicode.com/users/${userId}`;

    const postsUrl =
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    try {
        const [u, p] = await Promise.all([
            fetch(userUrl),
            fetch(postsUrl)
        ]);
        const user = await u.json();
        console.log('Name:', user.name);
        console.log('Email:', user.email);

        const posts = await p.json();
        console.log('Posts:', posts.length);

        const ptotal = posts.map((post) => post.title);
        console.log('Post Titles:', ptotal);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
task11();