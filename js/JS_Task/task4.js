// 1. Fetch all users from the API.
// 2. Create an array containing only the user names.
// 3. Create an array containing only the user emails.
// 4. Find the user with id 5.
// 5. Find the first user whose username starts with the letter 'S'.
// 6. Handle any API error properly.

async function task4() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const res = await fetch(url);
        const users = await res.json();

        const names = users.map(user => user.name);
        console.log('Names:', names);

        const emails = users.map(user => user.email);
        console.log('Emails:', emails);

        const user = users.find(val => val.id === 5);

        console.log(user);

        const nameWithS = users.find(user => user.username.startsWith('S'));
        console.log(nameWithS);

    } catch (error) {
        console.error('Error:', error.message);
    }
}
task4();