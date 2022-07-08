window.onscroll = function() {scrollFunction()};
const myNav = document.getElementById('navbar');

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // myNav.style.padding = "20px 0";
    myNav.style.backgroundColor = "white !important";
    myNav.classList.add('scrolled');
    myNav.classList.add('text-dark');
  } else {
    // myNav.style.padding = 0;
    myNav.classList.remove('scrolled');
    myNav.classList.remove('text-dark')
  }
}