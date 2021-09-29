const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
