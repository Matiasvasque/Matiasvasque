// Obtenemos el botón por su id
var botonCambiar = document.getElementById("botonCambiar");

// Agregamos un evento 'click' al botón

    // Cambiamos el contenido del botón utilizando this y innerText
    this.remove = botonCambiar;
    botonCambiar.addEventListener("click", function() {
        
        this.innerText = "Cerrar Sesion"
    
});
