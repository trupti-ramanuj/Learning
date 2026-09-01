async function task10() {
    const url = 'https://randomuser.me/api/';
    try {
        const data = await fetch(url);
        const jsonData = await data.json();
        const user = jsonData.results[0];

        console.log('fName:', user.name.first);

        console.log('lName:', user.name.last);

        console.log('email:', user.email);

        console.log('Country:', user.location.country);

        console.log('Phone:', user.phone);

    } catch (error) {
        console.error('Error:', error.message);
    }
}
task10();