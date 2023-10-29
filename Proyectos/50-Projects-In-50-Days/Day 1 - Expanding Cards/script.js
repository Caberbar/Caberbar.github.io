// Obtener todos los elementos con la clase "panel" y almacenarlos en la variable "paneles"
const paneles = document.querySelectorAll('.panel');

// Función para eliminar la clase 'active' de todos los paneles
function eliminarActividadClases(){
    // Iterar a través de cada panel y eliminar la clase 'active'
    paneles.forEach(panel => {
        panel.classList.remove('active');
    })
}

// Agregar un manejador de eventos 'click' a cada panel
paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        // Llamar a la función para eliminar 'active' de todos los paneles
        eliminarActividadClases();
        // Agregar la clase 'active' al panel que fue clicado
        panel.classList.add('active');
    })
})

