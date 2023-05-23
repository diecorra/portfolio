const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // remove fragment as much as it can go without adding an entry in browser history:

}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    window.location.replace("#");

    // slice off the remaining '#' in HTML5:
    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1));
    }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
