function addToCart(nome, preco, imagem, descricao) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Adiciona o produto ao array do carrinho, incluindo a quantidade
    const item = {
        nome: nome,
        preco: preco,
        imagem: imagem || '',
        descricao: descricao || '',
        quantidade: 1 // Quantidade inicial
    };

    // Verifica se o item já está no carrinho e, se sim, aumenta a quantidade
    const existingItemIndex = cart.findIndex(product => product.nome === nome);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantidade += 1; // Aumenta a quantidade
    } else {
        cart.push(item); // Adiciona um novo item
    }

    // Salva no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualiza o contador do carrinho
    updateCartCount();
}



// Atualizar o contador do carrinho
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Mostrar Detalhes no Pop-up
function showDetails(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('details-popup').classList.remove('hidden');
}

// Fechar Pop-up
function closeDetails() {
    document.getElementById('details-popup').classList.add('hidden');
}

// Animação no Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
        }
    });
});

// Carregar contador ao iniciar a página
document.addEventListener('DOMContentLoaded', updateCartCount);
