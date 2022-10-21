const home = document.getElementById('home')
const about = document.getElementById('about')
const tech = document.getElementById('tech')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})
