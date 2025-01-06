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

// Exibe detalhes do item no pop-up
function showDetails(title, description) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('details-popup').classList.remove('hidden');
}

// Fecha o pop-up
function closeDetails() {
    document.getElementById('details-popup').classList.add('hidden');
}


// Menu Hambúrguer
const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
