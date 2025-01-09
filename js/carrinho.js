const cartItemsContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

let cart = [];

// Função para atualizar o carrinho e o total
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>R$ ${item.price.toFixed(2)}</p>
                <div class="quantity">
                    <button class="decrease-quantity" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-index="${index}">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalElement.innerText = total.toFixed(2);
}

// Função para adicionar item ao carrinho
function addToCart(event) {
    const button = event.target;
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image");

    // Verifica se o item já está no carrinho
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; // Se já estiver, apenas aumenta a quantidade
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    updateCart();
}

// Função para aumentar a quantidade do item
function increaseQuantity(event) {
    const index = event.target.getAttribute("data-index");
    cart[index].quantity += 1;
    updateCart();
}

// Função para diminuir a quantidade do item
function decreaseQuantity(event) {
    const index = event.target.getAttribute("data-index");
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        updateCart();
    }
}

// Adiciona o evento de clique para os botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

// Adiciona eventos para os botões de aumento e diminuição de quantidade
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("increase-quantity")) {
        increaseQuantity(event);
    } else if (event.target.classList.contains("decrease-quantity")) {
        decreaseQuantity(event);
    }
});
