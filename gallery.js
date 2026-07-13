// ==============================
// GALERÍA PARA HIROMI ❤️
// ==============================

const fotos = document.querySelectorAll(".foto");

let angulo = 0;


function animarGaleria(){


    angulo += 0.003;


    // Se adapta al tamaño de pantalla

    const radio = Math.min(
        window.innerWidth * 0.35,
        280
    );


    fotos.forEach((foto,index)=>{


        const a = angulo + index * ((Math.PI * 2) / fotos.length);


        const x = Math.cos(a) * radio;


        const y = Math.sin(a) * (radio * 0.45);



        const escala = 1 + (Math.sin(a) * 0.15);



        foto.style.transform =
        `translate(${x}px, ${y}px) scale(${escala})`;



        foto.style.zIndex =
        Math.floor(1000 + y);



        foto.style.opacity = 1;



    });



    requestAnimationFrame(animarGaleria);


}



animarGaleria();