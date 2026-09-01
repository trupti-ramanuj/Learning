function task1() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log('Title:', data.title);
            console.log('Body:', data.body);
            console.log(data);
        })
        .catch((error) =>
            console.error('Error:', error.message));
}
task1();