// ===========================
// CORAZÓN 3D PARA HIROMI ❤️
// ===========================

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth / window.innerHeight,
0.1,
1000
);


camera.position.z = 120;



const renderer = new THREE.WebGLRenderer({

    canvas: document.getElementById("canvas"),

    alpha:true,

    antialias:true

});


renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.setSize(
window.innerWidth,
window.innerHeight
);



const geometry = new THREE.BufferGeometry();


const vertices = [];


// Menos partículas para mejor rendimiento móvil

for(let i = 0; i < 7000; i++){


    let t = Math.random() * Math.PI * 2;

    let r = Math.random();


    let x =
    16 * Math.pow(Math.sin(t),3);


    let y =
    13 * Math.cos(t)
    -5 * Math.cos(2*t)
    -2 * Math.cos(3*t)
    -Math.cos(4*t);



    vertices.push(

        x * r * 3,

        -y * r * 3,

        (Math.random()-0.5)*12

    );


}



geometry.setAttribute(

'position',

new THREE.Float32BufferAttribute(vertices,3)

);



const material = new THREE.PointsMaterial({

    color:0xff2d75,

    size:0.8,

    transparent:true,

    opacity:0.9

});



const heart = new THREE.Points(

geometry,

material

);


scene.add(heart);



const mouse = {

    x:0,

    y:0

};



function moverCorazon(){


    heart.rotation.y +=

    (mouse.x * 0.5 - heart.rotation.y) * 0.03;



    heart.rotation.x +=

    (mouse.y * 0.3 - heart.rotation.x) * 0.03;


}



function animateHeart(){


    requestAnimationFrame(animateHeart);



    moverCorazon();



    heart.rotation.z += 0.001;



    let s = 1 + Math.sin(Date.now()*0.003)*0.05;


    heart.scale.set(s,s,s);



    renderer.render(scene,camera);


}



animateHeart();





window.addEventListener("resize",()=>{


    camera.aspect =
    window.innerWidth / window.innerHeight;


    camera.updateProjectionMatrix();



    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );


});




// Movimiento con mouse

window.addEventListener("mousemove",(e)=>{


    mouse.x =
    (e.clientX / window.innerWidth) * 2 - 1;


    mouse.y =
    -(e.clientY / window.innerHeight) * 2 + 1;


});



// Movimiento táctil

window.addEventListener("touchmove",(e)=>{


    if(e.touches.length > 0){


        mouse.x =
        (e.touches[0].clientX / window.innerWidth) * 2 - 1;


        mouse.y =
        -(e.touches[0].clientY / window.innerHeight) * 2 + 1;


    }


});