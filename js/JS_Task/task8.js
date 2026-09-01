async function task8() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/9999');
        if (!res.ok) {
            console.log('User not found (404)');
            return;
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log('Error fetching user:', error.message);

    }

}
task8();