// script.js

document.addEventListener('DOMContentLoaded', function() {
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const comprarButton = document.getElementById('comprar'); // Asegúrate de tener este botón en tu HTML

    // Función para manejar el bloqueo de campos
    function handleInput() {
        if (numero1.value !== '') {
            numero2.disabled = true; // Bloquear el segundo campo
        } else if (numero2.value !== '') {
            numero1.disabled = true; // Bloquear el primer campo
        } else {
            numero1.disabled = false; // Desbloquear el primer campo
            numero2.disabled = false; // Desbloquear el segundo campo
        }
    }

    // Función para reiniciar los campos
    function resetFields() {
        numero1.value = '';
        numero2.value = '';
        numero1.disabled = false;
        numero2.disabled = false;
    }

    // Agregar eventos de entrada a los campos
    numero1.addEventListener('input', handleInput);
    numero2.addEventListener('input', handleInput);

    // Manejo del botón de cerrar modal
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButton.onclick = function() {
        modal.style.display = 'block';
    }

    closeModalButton.onclick = function() {
        modal.style.display = 'none';
        resetFields(); // Reiniciar los campos al cerrar el modal
    }

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            resetFields(); // Reiniciar los campos al cerrar el modal
        }
    }

    // Manejo del botón "Comprar"
    comprarButton.onclick = function() {
        alert("Cambios guardados"); // Mostrar mensaje de compra realizada
        modal.style.display = "none"; // Cerrar el modal
        resetFields(); // Reiniciar los campos
    }
});
