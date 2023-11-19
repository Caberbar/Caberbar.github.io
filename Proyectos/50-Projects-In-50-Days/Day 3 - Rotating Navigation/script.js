const abierto = document.getElementById('abierto');
const cerrado = document.getElementById('cerrado');
const contenedor = document.querySelector('.contenedor');

abierto.addEventListener('click', () => contenedor.classList.add('show-nav'));
cerrado.addEventListener('click', () => contenedor.classList.remove('show-nav'));