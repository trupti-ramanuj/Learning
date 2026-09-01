// TASKS:

// 1. Fetch all posts from the API.
// 2. Print the total number of posts.
// 3. Print the title of the first post.
// 4. Print the title of the last post.
// 5. Print the titles of the first 5 posts.
// 6. Handle errors using try...catch.

async function task3() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const res = await fetch(url);
        const posts = await res.json();

        console.log('Total number of posts:', posts.length);

        console.log('Title of the first post:', posts[0].title);

        console.log('Title of the last post:', posts[posts.length - 1].title);

        console.log('Titles of the first 5 posts:');
        for (let i = 0; i < 5; i++) {
            console.log('-', posts[i].title);
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}
task3();