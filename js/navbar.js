const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// esc closes nav toggle
window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    links.classList.remove("show-links");
  }
});
