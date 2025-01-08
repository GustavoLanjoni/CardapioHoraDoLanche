// Alternar a visibilidade das opções
function toggleDescricao(element) {
    const descricaoOpcoes = element.nextElementSibling;
    if (descricaoOpcoes.style.display === "block") {
        descricaoOpcoes.style.display = "none";
        element.innerHTML = "Selecione Quantidade ▼";
    } else {
        descricaoOpcoes.style.display = "block";
        element.innerHTML = "Ocultar opções ▲";
    }
}

// Adicionar ao carrinho com base na seleção
function addToCart(itemName) {
    const selectedOption = document.querySelector(`input[name="${itemName.toLowerCase()}"]:checked`);
    
    if (!selectedOption) {
        alert(`Por favor, selecione uma quantidade para ${itemName}.`);
        return;
    }
    
    const quantity = selectedOption.value;
    const price = parseFloat(selectedOption.getAttribute('data-preco'));
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push({
        nome: `${itemName} - ${quantity}`,
        preco: price,
        quantidade: 1
    });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} - ${quantity} adicionado ao carrinho por R$ ${price.toFixed(2)}`);
}
