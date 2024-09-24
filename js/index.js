
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('buttonText').addEventListener('click', function(){
    
        // Obtener el valor del input
        const nuevoItem = document.getElementById('inputText').value

        // Guardar datos en localStorage
        localStorage.setItem('nuevoItem', nuevoItem);

        // Mostrar en consola el dato guardado
        console.log(nuevoItem); // inputText.value

    });

});




