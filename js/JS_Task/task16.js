async function getUser() {
    const userId = 1;

    const url =
        `https://jsonplaceholder.typicode.com/users/${userId}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch user with id ${userId}: ${res.status} `);
    }
    return res.json();
}
async function task16() {
    try {
        const user = await getUser();
        console.log('Name:', user.name);

    } catch (error) {
        console.error('Error :', error.message);
    }
}

task16();