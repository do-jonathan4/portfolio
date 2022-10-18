const home = document.getElementById('home')
const about = document.getElementById('about')
const tech = document.getElementById('tech')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')

// window.addEventListener("scroll", function() {
//     const aboutSec = about.offsetTop;
//     const techSec = tech.offsetTop;
//     const divHeight = tech.offsetHeight;
//     // executes on #about 
//     if (window.scrollY > aboutSec && window.scrollY < techSec) {
//         window.scrollTo({ top: (aboutSec+divHeight), behavior: 'smooth' });
//     }
// })
// window.addEventListener('wheel', checkScrollDirection);

// function checkScrollDirection(event) {
//   if (checkScrollDirectionIsUp(event)) {
//     console.log('UP');
//   } else {
//     console.log('Down');
//     window.scroll({top: tech.offsetTop, behavior: 'smooth'})
//   }
// }
// function checkScrollDirectionIsUp(event) {
//     console.log(event.wheelDelta)
//     if (event.wheelDelta) {
//       return event.wheelDelta > 0;
//     }
//     return event.deltaY < 0;
//   }

about.scrollIntoView({behavior: "smooth"});

