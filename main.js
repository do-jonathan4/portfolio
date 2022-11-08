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

const techIcons = [
  'icon-1-HTML5.jpg',
  'icon-1-CSS3.jpg',
  'icon-1-Javascript.png',
  'icon-1-Git.png',
  'icon-1-DevTools.png',
  'icon-1-Wireframing.png',
  'icon-2-es6.png',
  'icon-2-NPM.png',
  'icon-2-OOP.png',
  'icon-2-PostgreSQL.jpg',
  'icon-2-Node.png',
  'icon-2-APIIntegrations.png',
  'icon-3-React.png',
  'icon-3-Webpack.png'
]
techIcons.forEach(x => {
  const containerTech = document.querySelector('.container-tech')
  const iconImg = document.createElement('img')
  iconImg.src = 'assets/icons/' + x
  containerTech.append(iconImg)
})