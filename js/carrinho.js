// Função para carregar os itens do carrinho
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = ''; // Limpa antes de renderizar

    if (cart.length === 0) {
        cartDisplay.innerHTML = '<p>O carrinho está vazio.</p>';
        return;
    }

    cart.forEach((item, index) => {
        cartDisplay.innerHTML += `
            <div class="cart-item">
                <img src="${item.imagem}" alt="${item.nome}">
                <div>
                    <h3>${item.nome}</h3>
                    <p>${item.descricao}</p>
                    <p>R$ ${item.preco.toFixed(2)}</p>
                    <div class="quantity-control">
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantidade || 1}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})">Remover</button>
            </div>
        `;
    });
}

// Função para alterar a quantidade
function changeQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantidade = (cart[index].quantidade || 1) + change;
        if (cart[index].quantidade < 1) {
            cart[index].quantidade = 1; // Impede quantidade menor que 1
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart(); // Recarrega os itens
    }
}


// Função para remover item do carrinho
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove o item no índice especificado
    localStorage.setItem('cart', JSON.stringify(cart)); // Salva a lista de novo
    loadCart(); // Recarrega o carrinho com os itens restantes
}


// Inicializa os itens ao carregar a página
document.addEventListener('DOMContentLoaded', loadCart);
