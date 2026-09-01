async function task15() {
    const productIds = [1, 2, 3, 4, 5];
    const baseUrl = 'https://fakestoreapi.com/products';
    const urls = productIds.map((id) => `${baseUrl}/${id}`);
    try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const products = await Promise.all(responses.map((r) => r.json()));

        console.log('Names', products.map((p) => p.title));

        console.log('Prices', products.map((p) => p.price));

        const mostEP = products.reduce((max, product) => {
            return product.price > max.price ? product : max;
        });

        console.log(mostEP);

        const cheapest = products.reduce((min, product) => {
            return product.price < min.price ? product : min;
        });

        console.log(cheapest);

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
task15();