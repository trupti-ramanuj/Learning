async function task2() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    try {
        const user = await fetch(url);
        const data = await user.json();

        console.log('Name:', data.name);

        console.log('Email:', data.email);

        console.log('City:', data.address.city);

    } catch (error) {
        console.error('Error:', error.message);
    }
}
task2();