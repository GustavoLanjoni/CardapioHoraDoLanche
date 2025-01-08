// Função para enviar mensagem para o WhatsApp
function sendToWhatsApp() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let message = 'Olá, gostaria de fazer meus pedidos:\n\n'; // Mensagem inicial

    // Verifica se o carrinho está vazio
    if (cart.length === 0) {
        alert("O carrinho está vazio.");
        return;
    }

    // Adiciona itens ao pedido
    cart.forEach(item => {
        message += `Nome: ${item.nome}\nQuantidade: ${item.quantidade || 1}\n`;
        if (item.imagem) {
            message += `Foto: ${item.imagem}\n`;
        }
        message += '\n';
    });

    // Codifica mensagem para URL
    let encodedMessage = encodeURIComponent(message);

    // Abre o WhatsApp com a mensagem preenchida
    window.open(`https://wa.me/5517988214013?text=${encodedMessage}`, '_blank');
}
