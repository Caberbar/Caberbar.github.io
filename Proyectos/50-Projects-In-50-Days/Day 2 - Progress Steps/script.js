const progreso = document.getElementById('progreso');
const atras = document.getElementById('atras');
const siguiente = document.getElementById('siguiente');
const circulos = document.querySelectorAll('.circulo');

let activoActual = 1;

siguiente.addEventListener('click', () => {
        activoActual++;

        if (activoActual > circulos.length) {
            activoActual = circulos.length;
        }

        actualizar();
    }
)

atras.addEventListener('click', () => {
    activoActual--

    if (activoActual < 1) {
        activoActual = 1
    }
    actualizar()
})

function actualizar() {
    circulos.forEach((circulo, idx) => {
        if (idx < activoActual) {
            circulo.classList.add('activo');
        }else{
            circulo.classList.remove('activo');
        }
    })

    const activos = document.querySelectorAll('.activo');
    
    progreso.style.width = (activos.length -1) / (circulos.length - 1) * 100 + '%';

    if (activoActual === 1) {
        atras.disabled = true;
    }else if (activoActual === circulos.length){
        siguiente.disabled = true;
    }else{
        atras.disabled = false;
        siguiente.disabled = false;
    }
}