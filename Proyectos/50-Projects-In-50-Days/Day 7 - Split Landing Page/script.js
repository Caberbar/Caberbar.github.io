const derecha = document.querySelector('.derecha');
const izquierda = document.querySelector('.izquierda');
const contenedor = document.querySelector('.contenedor');

derecha.addEventListener('mouseenter', () => contenedor.classList.add('hover-derecha'))
derecha.addEventListener('mouseleave', () => contenedor.classList.remove('hover-derecha'))

izquierda.addEventListener('mouseenter', () => contenedor.classList.add('hover-izquierda'))
izquierda.addEventListener('mouseleave', () => contenedor.classList.remove('hover-izquierda'))