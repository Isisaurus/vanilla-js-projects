// select buttons and overlay
const modalBtn = document.querySelector(".modal__btn");
const closeBtn = document.querySelector(".modal__close");
const modalOverlay = document.querySelector(".modal__overlay");

// listen for clicks on modal btn and close btn
modalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("modal-open");
});
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("modal-open");
});
