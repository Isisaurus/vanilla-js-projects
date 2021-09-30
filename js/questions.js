// 1. traversing the dom
// const questionBtns = document.querySelectorAll(".btn__question");

// questionBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.closest(".question");
//     if (question) {
//       question.classList.toggle("show-text");
//     }
//   });
// });

// 2. using selectors

const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  const btn = q.querySelector(".btn__question");
  btn.addEventListener("click", (e) => {
    q.classList.toggle("show-text");
  });
});
