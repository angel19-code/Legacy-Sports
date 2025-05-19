document.addEventListener('DOMContentLoaded', () => {
  const text = "¡Bienvenido a nuestra página de camisetajjj!"; // El texto que quieres escribir
  const speed = 100; // Velocidad de escritura (en milisegundos)
  const typewriter = document.getElementById('typewriter');
  typewriter.textContent = ""; // Asegura que el contenedor comience vacío
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index); // Agrega un carácter
      index++;
      setTimeout(type, speed); // Llama a la función de nuevo después de un tiempo
    }
  }

  type(); // Inicia el efecto de escritura
});

