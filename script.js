let header = document.getElementById("header");
let button = document.querySelectorAll(".navListLink");
let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let section3 = document.getElementById("section-3");
let section4 = document.getElementById("section-4");
let section5 = document.getElementById("section-5");
let hamburger = document.getElementById("hamburger");
const nav = 100;

window.onscroll = () => {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
  header.setAttribute("style", "background-color: #378c3f;"); 
} else {
  header.setAttribute("style", "background-color: #378c3f00;"); 
}};

button[0].addEventListener('click', () => {
  window.scroll({ top: (section1.offsetTop - nav) , left: 0, behavior: 'smooth' });
})

button[1].addEventListener('click', () => {
  window.scroll({ top: (section2.offsetTop - nav) , left: 0, behavior: 'smooth' });
})

button[2].addEventListener('click', () => {
  window.scroll({ top: (section3.offsetTop - nav) , left: 0, behavior: 'smooth' });
})

button[3].addEventListener('click', () => {
  window.scroll({ top: (section4.offsetTop - nav) , left: 0, behavior: 'smooth' });
})

button[4].addEventListener('click', () => {
  section5.scrollIntoView();
})

hamburger.addEventListener('click', () => {
  
  hamburger.classList.toggle("is-active");
})