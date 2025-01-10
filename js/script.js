let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartItems = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');
const cartCountElem = document.getElementById('cart-count');
const cartDiv = document.getElementById('cart');
const closeCartBtn = document.getElementById('close-cart');

const updateCart = () => {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    totalPriceElem.textContent = total.toFixed(2);
    cartCountElem.textContent = cart.length;
};

const addToCart = (name, price, quantity) => {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += quantity;
    } else {
        cart.push({ name, price: parseFloat(price), quantity });
    }
    updateCart();
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        const quantity = parseInt(button.previousElementSibling.value);
        addToCart(name, price, quantity);
    });
});

cartBtn.addEventListener('click', () => {
    cartDiv.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartDiv.style.display = 'none';
});


