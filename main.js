// ==============================
// PARA HIROMI ❤️
// ==============================

const mensajes = [
    "Te amo, Hiromi ❤️",
    "Eres lo mejor de mi vida.",
    "Eres mi sueño.",
    "Eres lo que buscaba y nunca encontré... porque tú me encontraste.",
    "Eres tan necesaria como el aire que respiro.",
    "Gracias por existir. ❤️"
];


let indice = 0;
let iniciado = false;
let maquina = null;


const texto = document.getElementById("texto");
const contador = document.getElementById("contador");
const boton = document.getElementById("abrir");
const inicio = document.getElementById("inicio");
const mensajesBox = document.getElementById("mensajes");
const galeria = document.getElementById("galeria");
const carta = document.getElementById("carta");


if(boton){

    boton.addEventListener("click", iniciar);

}



function iniciar(){

    if(iniciado) return;

    iniciado = true;


    inicio.style.opacity = "0";


    setTimeout(()=>{

        inicio.style.display = "none";

    },1000);



    mensajesBox.style.display = "block";

    galeria.style.display = "flex";



    escribir();

    setInterval(escribir,6000);



    actualizarContador();

    setInterval(actualizarContador,1000);



    setTimeout(()=>{

        carta.classList.add("activa");

    },35000);


}




function escribir(){


    if(!texto) return;


    if(maquina){

        clearInterval(maquina);

    }


    texto.innerHTML = "";


    const frase = mensajes[indice];


    let letra = 0;



    maquina = setInterval(()=>{


        texto.innerHTML += frase.charAt(letra);


        letra++;



        if(letra >= frase.length){

            clearInterval(maquina);

        }


    },60);



    indice++;



    if(indice >= mensajes.length){

        indice = 0;

    }

}




function actualizarContador(){


    if(!contador) return;



    const inicioRelacion = new Date("2026-06-22T00:00:00");


    const ahora = new Date();



    const diferencia = ahora - inicioRelacion;



    if(diferencia < 0){

        contador.innerHTML =
        "❤️ Nuestro momento está por comenzar ❤️";

        return;

    }



    const dias = Math.floor(diferencia / 86400000);


    const horas = Math.floor(
        (diferencia / 3600000) % 24
    );


    const minutos = Math.floor(
        (diferencia / 60000) % 60
    );


    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );



    contador.innerHTML =
    `❤️ ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos ❤️`;

}