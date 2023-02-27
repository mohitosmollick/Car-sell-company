let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('menulist');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('menulist');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('menulist');
    search.classList.remove('active');
}
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow' , window.scrollY > 0)
})