const sounds = ['bell','boom','duck','interface','punch','trap'];

sounds.forEach(sonido => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText= sonido;

    btn.addEventListener('click', () => {
        stopSonido();

        document.getElementById(sonido).play() //Activamos el sonido
    })

    document.getElementById('buttons').appendChild(btn);
});

function stopSonido() {
    sounds.forEach(sonido => {
        const sond =   document.getElementById(sonido);

        sond.pause();
        sond.currentTime = 0;
    })
}