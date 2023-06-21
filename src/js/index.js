const openMenu = document.querySelector('.fa-solid')
const nav = document.querySelector('nav')

openMenu.addEventListener('click', () =>{
    openMenu.classList.toggle('fa-bars')
    openMenu.classList.toggle('fa-xmark')

    nav.classList.toggle('none')
})