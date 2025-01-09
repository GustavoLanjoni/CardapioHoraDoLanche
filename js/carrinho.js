let cart = [];

function addToCart(name, price, image, description) {
    // Verificar se o item já está no carrinho
    const existingItem = cart.find(item => item.name === name && item.price === price);
    if (existingItem) {
        // Se o item já existe, apenas aumentar a quantidade
        existingItem.quantity++;
    } else {
        // Se o item não existe, adiciona o item com quantidade 1
        const item = {
            name,
            price,
            image,
            description,
            quantity: 1
        };
        cart.push(item);
    }

    // Exibir o carrinho e atualizar o total
    displayCart();
    updateCartCount();
    updateTotalPrice();
}

function displayCart() {
    const cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = '';  // Limpar o carrinho antes de exibir novamente

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>R$ ${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button onclick="changeQuantity('${item.name}', ${item.price}, 'decrease')">-</button>
                    <span id="quantity-${item.name}">${item.quantity}</span>
                    <button onclick="changeQuantity('${item.name}', ${item.price}, 'increase')">+</button>
                </div>
            </div>
        `;
        cartDisplay.appendChild(itemElement);
    });
}

function changeQuantity(name, price, action) {
    const item = cart.find(item => item.name === name);
    
    if (item) {
        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity--;
        }
    }
    
    displayCart();
    updateTotalPrice();
}

function updateTotalPrice() {
    let totalPrice = 0;
    
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

function sendToWhatsApp() {
    let message = 'Pedido:\n';
    cart.forEach(item => {
        message += `${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
