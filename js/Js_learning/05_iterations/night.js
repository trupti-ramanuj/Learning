const myNum = [1, 2, 3]


// const myTotal = myNum.reduce(function ( acc,cvalue){
//     console.log(`acc:${acc} and cvalue: ${cvalue}`);
//     return acc + cvalue 
// },0)

const myTotal = myNum.reduce((acc, cvalue) => acc + cvalue,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) =>acc +  item.price, 0)
console.log(priceToPay);