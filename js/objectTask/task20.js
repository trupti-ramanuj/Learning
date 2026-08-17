const cart = {
    items: []
};

//addItem
function addItem(cart, item) {
    if (!item || typeof item !== "object") {
        return {
            success: false,
            message: "Invalid item"
        };
    }
    if (item.id === undefined ||
        item.name === undefined ||
        typeof item.price !== "number" ||
        typeof item.quantity !== "number"
    ) {
        return {
            success: false,
            message: "Invalid item data"
        };
    }
    if (item.quantity <= 0) {
        return {
            success: false,
            message: "Quantity must be greater than zero"
        };
    }
    const corentItem = cart.items.find(
        cartItem => cartItem.id === item.id
    );
    if (corentItem) {
        corentItem.quantity += item.quantity;
    } else {
        cart.items.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        });
    }
    return {
        success: true,
        message: "Item added successfully"
    };
}
console.log(
    addItem(cart, {
        id: 1,
        name: "Laptop",
        price: 70000,
        quantity: 1
    })
);
console.log(
    addItem(cart, {
        id: 2,
        name: "Mouse",
        price: 1500,
        quantity: 2
    })
);

console.log(
    addItem(cart, {
        id: 1,
        name: "Laptop",
        price: 70000,
        quantity: 2
    })
);
console.log(cart);

//removeItem
function removeItem(cart, id) {
    const index = cart.items.findIndex(
        item => item.id === id
    );
    if (index === -1) {
        return {
            success: false,
            message: "Item not found"
        };
    }
    cart.items.splice(index, 1);
    return {
        success: true,
        message: "Item removed successfully"
    };
}

console.log(removeItem(cart, 2));
console.log(cart);

//increaseQuantity

function incrreaseQuantity(cart, id) {
    const item = cart.items.find(
        item => item.id === id
    );
    if (!item) {
        return {
            success: false,
            message: "Item not found"
        };
    }
    item.quantity++;
    return {
        success: true,
        message: "Quantity increased"
    };
}
console.log(incrreaseQuantity(cart, 1));
console.log(cart);

//decreaseQuantity

function decreaseQuantity(cart, id) {
    const item = cart.items.find(
        item => item.id === id
    );
    if (!item) {
        return {
            success: false,
            message: "Item not found"
        };
    }
    item.quantity--;
    return {
        success: true,
        message: "Quantity decrease"
    };
}
console.log(decreaseQuantity(cart, 1));
console.log(cart);

//Total
function getTotal(cart) {
    return cart.items.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );
}
console.log("Total", getTotal(cart));

//ItemCount

function getItemCount(cart) {
    return cart.items.reduce(
        (total, item) => total + item.quantity, 0
    );
}
console.log("Item Count:", getItemCount(cart));

console.log(cart);