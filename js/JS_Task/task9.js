const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts'
];

async function task9() {
    try {
        const [usersResponse, postsResponse] = await Promise.all(
            urls.map((url) => fetch(url))
        );

        if (!usersResponse.ok) {
            throw new Error('Failed to fetch users data');
        }

        if (!postsResponse.ok) {
            throw new Error('Failed to fetch posts data');
        }

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        console.log('Total users:', users.length);
        console.log('Total posts:', posts.length);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

task9();