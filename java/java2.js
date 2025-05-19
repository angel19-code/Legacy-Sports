window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Cambia el valor según sea necesario
        header.style.height = '60px'; // Altura reducida del header
        header.style.padding = '10px'; // Espaciado interno reducido
        logo.style.width = '50px'; // Tamaño reducido del logo
    } else {
        header.style.height = '100px'; // Altura original del header
        header.style.padding = '20px'; // Espaciado interno original
        logo.style.width = '100px'; // Tamaño original del logo
    }
});