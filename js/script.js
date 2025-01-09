 // Carrinho de compras
 let cart = [];
    
 // Função para adicionar item ao carrinho
 function addToCart(name, price, image, description) {
     // Criar um objeto do item e adicionar ao carrinho
     const item = {
         name,
         price,
         image,
         description
     };
     cart.push(item);

     // Exibir o carrinho
     displayCart();
     updateCartCount();  // Atualiza a quantidade de itens no carrinho
 }

 // Função para exibir o conteúdo do carrinho
 function displayCart() {
     const cartDisplay = document.getElementById('cart-display');
     cartDisplay.innerHTML = '';  // Limpar o carrinho antes de exibir novamente

     // Loop pelos itens do carrinho e adicionar ao carrinho visual
     cart.forEach(item => {
         const itemElement = document.createElement('div');
         itemElement.classList.add('cart-item');

         // Adicionar imagem, nome, preço e descrição
         itemElement.innerHTML = `
             <img src="${item.image}" alt="${item.name}" class="cart-item-image">
             <div class="cart-item-details">
                 <h3>${item.name}</h3>
                 <p>${item.description}</p>
                 <p>R$ ${item.price.toFixed(2)}</p>
             </div>
         `;

         cartDisplay.appendChild(itemElement);
     });
 }

 // Função para atualizar a quantidade de itens no carrinho
 function updateCartCount() {
     const cartCount = document.getElementById('cart-count');
     cartCount.textContent = cart.length;  // Atualiza o número de itens no carrinho
 }

 // Função para enviar o pedido para o WhatsApp
 function sendToWhatsApp() {
     let message = 'Pedido:\n';
     cart.forEach(item => {
         message += `${item.name} - R$ ${item.price.toFixed(2)}\n`;
     });
     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
     window.open(whatsappUrl, '_blank');
 }