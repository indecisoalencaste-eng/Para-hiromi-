const starsCanvas = document.createElement("canvas");

starsCanvas.id = "stars";

document.body.prepend(starsCanvas);


const sctx = starsCanvas.getContext("2d");


function ajustarCanvas(){

    starsCanvas.width = window.innerWidth;

    starsCanvas.height = window.innerHeight;

}


ajustarCanvas();


window.addEventListener("resize", ajustarCanvas);



const stars = [];


for(let i = 0; i < 500; i++){

    stars.push({

        x: Math.random() * starsCanvas.width,

        y: Math.random() * starsCanvas.height,

        r: Math.random() * 2,

        speed: Math.random() * 0.4 + 0.1

    });

}



function animateStars(){


    sctx.clearRect(
        0,
        0,
        starsCanvas.width,
        starsCanvas.height
    );


    stars.forEach(star => {


        sctx.beginPath();


        sctx.arc(
            star.x,
            star.y,
            star.r,
            0,
            Math.PI * 2
        );


        sctx.fillStyle = "white";


        sctx.fill();



        star.y += star.speed;



        if(star.y > starsCanvas.height){

            star.y = 0;

            star.x = Math.random() * starsCanvas.width;

        }


    });


    requestAnimationFrame(animateStars);


}



animateStars();