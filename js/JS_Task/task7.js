async function task7() {

    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        const e = data.filter((p) => p.category === 'electronics');
        console.log(e);
        console.log('Total Electronics Products:', e.length);
        console.log('Electronics names:', e.map((p) => p.title));

        const totalp = e.reduce((sum, p) => sum + p.price, 0);
        console.log('Total Price of Electronics Products:', totalp);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
task7();