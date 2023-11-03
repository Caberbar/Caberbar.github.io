const jokeEl = document.getElementById('joke');
const boton = document.getElementById('jokeBtn');

boton.addEventListener('click',generarBroma);

generarBroma();

//Using async/await
async function generarBroma() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single', config);


    const data = await res.json();

    jokeEl.innerHTML = data.joke;

//using .then()    
    // const config = {
    //     headers: {
    //         'Accept': 'application/json'
    //     }
    // }

    // fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single', config).then(res =>
    // res.json()).then((data) => {
    //     jokeEl.innerHTML = data.joke
    // });
}