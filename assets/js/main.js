// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("topbar");
var navbar2 = document.getElementById("topbaryellow");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var sticky2 = navbar2.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function stickyFunction2() {
  if (window.pageYOffset >= sticky2) {
    navbar2.classList.add("sticky2");
  } else {
    navbar2.classList.remove("sticky2");
  }
}
