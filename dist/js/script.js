//  Navbar Fixed

const header = document.querySelector('header');
const fixNav =  header.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset > fixNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
};


// Hamberger
const hamburger=document.querySelector('#hamburger');
const navMenu=document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});