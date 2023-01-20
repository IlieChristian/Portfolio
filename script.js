let header = document.getElementById("header")

window.onscroll = () => {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
  header.setAttribute("style", "background-color: #378c3f;"); 
} else {
  header.setAttribute("style", "background-color: #378c3f00;"); 
}};