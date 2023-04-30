const navUl = document.getElementById('nav-ul')
const loader = document.getElementById('loader')
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

window.onload = function () {
   setTimeout(() => {
    loader.classList.add('hidden')
    header.classList.remove('hidden')
    main.classList.remove('hidden')
    footer.classList.remove('hidden')
   }, 100)
}
