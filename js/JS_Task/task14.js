async function task14() {
    const userIds = [1, 2, 3, 4, 5];
    const urls = userIds.map((id) => `https://jsonplaceholder.typicode.com/users/${id}`);

    try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const users = await Promise.all(responses.map((r) => r.json()));

        const idNames = users.map(({ id, name }) => ({ id, name }));
        console.log(idNames);

        const names = users.map((u) => u.name);
        console.log(names);

        const emails = users.map((u) => u.email);
        console.log(emails);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
task14();