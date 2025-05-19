// Mostrar el popup al hacer clic en "Más Vendidos"
document.querySelector('.mas-vendidos').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    document.querySelector('.popup').style.display = 'flex';
});

// Ocultar el popup al hacer clic fuera del contenido
document.querySelector('.popup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});