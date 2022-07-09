window.onscroll = function () {
  scrollFunction();
};
const myNav = document.getElementById("bg-dark");
const navBrand = document.getElementById("navBrand");
const navBurger = document.getElementById("toggler-icon");
const navLink = document.getElementsByClassName("nav-link");
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    myNav.classList.add("scrolled");
    navBurger.classList.add("scrolled-burger")
    navBrand.classList.add("scrolled-txt");
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add("scrolled-txt");
    }
  } else {
    myNav.classList.remove("scrolled");
    navBurger.classList.remove("scrolled-burger")
    navBrand.classList.remove("scrolled-txt");
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("scrolled-txt");
    }
  }
}
