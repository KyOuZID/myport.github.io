let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    menu.classList.toggle('Open');
}
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.Me-text',{delay:200, origin:'top'});
sr.reveal('.Me-img',{delay:450, origin:'top'});
sr.reveal('.icon',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});
sr.reveal('.MyCV',{delay:500, origin:'top'})