    // Função para exibir a mensagem
    function showCartMessage(productName) {
        const messageContainer = document.getElementById('cart-message');
        messageContainer.textContent = `${productName} foi adicionado ao carrinho!`;
        messageContainer.style.display = 'block';

        // Ocultar a mensagem após 3 segundos
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 3000);
    }

    // Adicionar evento aos botões de "Adicionar ao Carrinho"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            showCartMessage(productName);
        });
    });