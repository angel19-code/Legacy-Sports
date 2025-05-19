const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
});

// Auto-play (optional)
setInterval(() => {
    nextButton.click();
}, 10000);

const items = document.querySelectorAll('.carousel-item');
const progressBars = document.querySelectorAll('.progress-bar');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let interval;

// Función para mostrar el elemento activo.
function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active'); // Quita la clase activa de todas las imágenes.
        progressBars[i].querySelector('::after').style.width = '0'; // Reinicia el ancho de todas las barras.
        if (i === index) {
            item.classList.add('active'); // Activa la imagen actual.
        }
    });
    animateProgressBar(index); // Llama a la animación de la barra.
}

// Función para animar la barra de progreso.
function animateProgressBar(index) {
    progressBars.forEach((bar, i) => {
        const progressBarFill = bar.querySelector('::after');
        if (i === index) {
            progressBarFill.style.width = '100%'; // Llena la barra actual.
        } else {
            progressBarFill.style.width = '0'; // Reinicia las demás barras.
        }
    });
}

// Evento para el botón "anterior".
prevButton.addEventListener('click', () => {
    clearInterval(interval); // Reinicia el temporizador.
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showItem(currentIndex);
    startCarousel();
});

// Evento para el botón "siguiente".
nextButton.addEventListener('click', () => {
    clearInterval(interval); // Reinicia el temporizador.
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
    startCarousel();
});

// Función para iniciar el carrusel automático.
function startCarousel() {
    interval = setInterval(() => {
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
    }, 10000); // Duración de cada slide.
}

// Inicia el carrusel al cargar la página.
startCarousel();