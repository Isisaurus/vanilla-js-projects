// set initial count
let count = 0;

const counter = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("increase")) {
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "lightslategrey";
    }
    counter.innerText = count;
  });
});

console.log(count);
