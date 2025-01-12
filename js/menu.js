// Script para abrir/fechar o menu hambúrguer
document.getElementById("menu-toggle").addEventListener("click", function() {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("open"); // Alterna a classe 'open' para mostrar ou esconder o menu
});
