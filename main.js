const card  = document.querySelector('.card');
const cardcntr = document.querySelector('.cardcontainer');
const header = document.querySelector('.header');
const sandal = document.querySelector('.sandar img');
const addToCart = document.querySelector('.addToCart');
const dscrptn = document.querySelector('.content h3');
const sizes = document.querySelector('.size');



cardcntr.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 -e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

cardcntr.addEventListener('mouseenter', (e) =>{
    card.style.trasition = 'none';
    header.style.transform = 'translateZ(150px)';
    sandal.style.transform = 'translateZ(200) rotate(-45deg)';
    dscrptn.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    addToCart.style.transform = 'traslateZ(75px)';
});

cardcntr.addEventListener('mouseleave', (e) =>{
    card.style.trasition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    header.style.transform = 'translateZ(0px)';
    sandal.style.transform = "traslateZ(0px) rotateZ(0deg)";
    dscrptn.style.transform = 'translateZ(0px)';
    sizes.style.transform =  "translateZ(0px)";
    addToCart.style.transform = 'translateZ(0px)';
}
)