async function getUser(userId) {
    //    const userId = 10;

    const userUrl =
        `https://jsonplaceholder.typicode.com/users/${userId}`;

    const res = await fetch(userUrl);
    if (!res.ok) {
        throw new Error(`Failed to fetch user with id ${userId}: ${res.status} `);
    }
    return res.json();
}
async function task19() {
    try {
        const user = await getUser(10);
        console.log('Name:', user.name);
    } catch (error) {
        console.error('Error :', error.message);
    }

    try {
        const user = await getUser(999);
        console.log('Name:', user.name);
    } catch (error) {
        console.log('Error :', error.message);
    }
}
task19();