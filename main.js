const home = document.getElementById('home')
const about = document.getElementById('about')
const tech = document.getElementById('tech')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')
const openingTag = document.querySelectorAll('.opening')
const closingTag = document.getElementsByClassName('closing')

window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Object.keys(openingTag).forEach(x => openingTag[x].textContent = '<')
// Object.keys(closingTag).forEach(x => closingTag[x].textContent = '/>')

