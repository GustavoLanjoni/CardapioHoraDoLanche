document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const successMessage = document.getElementById('success-message');

        // Mostrar a mensagem de sucesso
        successMessage.classList.add('visible');
        successMessage.classList.remove('hidden');

        // Esconder a mensagem após 3 segundos
        setTimeout(() => {
            successMessage.classList.remove('visible');
        }, 3000);
    });
});
