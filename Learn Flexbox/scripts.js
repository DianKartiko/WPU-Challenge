const toogle = document.querySelector('.menu-togle input')
const nav = document.querySelector('nav ul')

toogle.addEventListener('click', ()=> {
    nav.classList.toggle('slide');
})