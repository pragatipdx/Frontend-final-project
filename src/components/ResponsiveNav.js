const navSlide = (()=>{

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-links');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    })
})
const app= (()=>{
    navSlide();
})
