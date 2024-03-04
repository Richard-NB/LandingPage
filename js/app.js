const navIcon = document.querySelector('.nav__icon');
const navMenu = document.querySelector('.nav_list');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', () => {
    navMenu.classList.toggle("spred");
});

navMenu.addEventListener('click', ()=>{
    navMenu.classList.remove("spred");
});

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0);
});