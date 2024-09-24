document.addEventListener('DOMContentLoaded', function() {
    // Recuperar el dato almacenado en localStorage
    const nuevoItem = localStorage.getItem('nuevoItem');
    
    // Mostrar el dato en el elemento con el ID 'data'
    document.getElementById('data').textContent = nuevoItem ? nuevoItem : 'No hay datos disponibles.';
});