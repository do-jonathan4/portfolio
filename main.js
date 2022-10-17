// var topOfDiv = document.getElementById("p2").offsetTop;
// var divHeight = document.getElementById("p3").offsetHeight;
// window.scrollTo({ top: (topOfDiv+divHeight), behavior: 'smooth' });

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')

window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("p2");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        console.log("You've scrolled past p2");
    }
  });