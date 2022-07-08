window.onscroll = function () {
  scrollFunction();
};
const myNav = document.getElementById(".bg-dark");
const navBrand = document.getElementById("navBrand");
const navLink = document.getElementsByClassName("nav-link");
function scrollFunction() {
  if (
    document.body.scrollTop > 730 ||
    document.documentElement.scrollTop > 730
  ) {
    myNav.classList.add("scrolled");
    navBrand.classList.add("scrolled-txt");
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add("scrolled-txt");
    }
  } else {
    myNav.classList.remove("scrolled");
    navBrand.classList.remove("scrolled-txt");
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("scrolled-txt");
    }
  }
}
