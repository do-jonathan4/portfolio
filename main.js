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

const projectsArray = [
  {
    img: 'ajax-project.jpg',
    title: 'Chuck Norris Facts',
    link: 'https://do-jonathan4.github.io/ajax-project/',
    git: 'https://github.com/do-jonathan4/ajax-project'
  },
  {
    img: 'week-planner.jpg',
    title: 'Week Planner',
    link: 'https://do-jonathan4.github.io/week-planner/',
    git: 'https://github.com/do-jonathan4/week-planner'
  },
  {
    img: 'chat-app-project.jpg',
    title: 'Group Chat App',
    link: 'https://group-chat-app1.herokuapp.com/',
    git: 'https://github.com/do-jonathan4/chat-app-project'
  },
  {
    img: 'memory-match.jpg',
    title: 'Memory Match Game',
    link: 'https://do-jonathan4.github.io/memory-match/',
    git: 'https://github.com/do-jonathan4/memory-match'
  },
  {
    img: 'number-guesser.jpg',
    title: 'Number Guesser Game',
    link: 'https://do-jonathan4.github.io/number-guesser/',
    git: 'https://github.com/do-jonathan4/number-guesser'
  },
  {
    img: 'meme-gallery.jpg',
    title: 'Meme Gallery',
    link: 'https://do-jonathan4.github.io/meme-gallery/',
    git: 'https://github.com/do-jonathan4/meme-gallery'
  },
  {
    img: 'character-count-app.jpg',
    title: 'Character Count App',
    link: 'https://do-jonathan4.github.io/character-count-app/',
    git: 'https://github.com/do-jonathan4/character-count-app'
  }
]