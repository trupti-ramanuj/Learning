async function fetchAllData(urls) {
    return Promise.all(
        urls.map(async (url) => {

            const res = await fetch(url);
            if (!res.ok) throw new Error(`Failed to fetch data from ${url}: ${res.status}`);
            return res.json();
        })
    );
}
async function task17() {
    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/todos',
    ];
    try {
        const [users, posts, todos] = await fetchAllData(urls);
        console.log('Total users:', users.length);
        console.log('Total posts:', posts.length);
        console.log('Total todos:', todos.length);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
task17();
