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
    } else {
      return;
    }
    counter.innerText = count;
  });
});

console.log(count);
