// Função para adicionar a porção ao carrinho
function adicionarPorcaoAoCarrinho(item) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o item já existe no carrinho com o mesmo nome e peso
    let itemExistente = carrinho.find(i => i.nome === item.nome && i.peso === item.peso);

    if (itemExistente) {
        // Se o item já existe, apenas aumenta a quantidade
        itemExistente.quantidade += item.quantidade;
    } else {
        // Se o item não existir, adiciona ele ao carrinho
        item.preco = `R$${item.preco.toFixed(2).replace('.', ',')}`; // Formata o preço com "R$"
        carrinho.push(item);
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho(); // Atualiza a contagem do carrinho
}

// Função para obter os dados da porção e adicioná-la ao carrinho
function getPorcaoData(button) {
    let itemElement = button.closest('.menu-item');
    let selectElement = itemElement.querySelector('.portion-select');

    // Captura o peso e preço da opção escolhida
    let peso = selectElement.options[selectElement.selectedIndex].value; // Peso em gramas
    let preco = parseFloat(selectElement.options[selectElement.selectedIndex].dataset.price); // Preço

    // Cria o nome com o peso incluído
    let nomeComPeso = button.dataset.name + " " + peso + "g";

    let item = {
        nome: nomeComPeso,  // Nome da porção com peso
        imagem: button.dataset.image,
        peso: peso,  // Peso em gramas
        preco: preco, // Preço unitário
        quantidade: 1
    };

    // Chama a função para adicionar o item ao carrinho
    adicionarPorcaoAoCarrinho(item);
}

// Atualiza a contagem do carrinho
function atualizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let quantidadeItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cart-count').textContent = quantidadeItens;

    // Atualiza a exibição do carrinho (exemplo para renderizar os itens em uma lista)
    let carrinhoContainer = document.getElementById('carrinho-itens');
    if (carrinhoContainer) {
        carrinhoContainer.innerHTML = ""; // Limpa o carrinho antes de renderizar

        carrinho.forEach(item => {
            let itemElement = document.createElement('div');
            itemElement.classList.add('carrinho-item');
            itemElement.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}" class="carrinho-item-imagem">
                <div class="carrinho-item-detalhes">
                    <h4>${item.nome}</h4>
                    <p>Peso: ${item.peso}g</p>
                    <p>Preço: ${item.preco}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
            `;
            carrinhoContainer.appendChild(itemElement);
        });
    }
}

// Adiciona o evento de clique para o botão de adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        getPorcaoData(this);
    });
});

// Atualiza a contagem inicial do carrinho
atualizarCarrinho();
