const cajas = document.querySelectorAll('.caja')

window.addEventListener('scroll', checkCajas)

checkCajas()

function checkCajas() {
    const triggerBottom = window.innerHeight / 5 * 4

    cajas.forEach(caja => {
        const cajaTop = caja.getBoundingClientRect().top

        if (cajaTop < triggerBottom) {
            caja.classList.add('mostrar')
        }else{
            caja.classList.remove('mostrar')
        }
    })
}