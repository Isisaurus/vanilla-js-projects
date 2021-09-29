const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("flipper-btn");
const color = document.getElementById("flipper-span");

const getRandomNum = function () {
  return Math.floor(Math.random() * hex.length);
};

const getRandomHex = function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()];
  }
  return hexColor;
};

btn.addEventListener("click", () => {
  const hexColor = getRandomHex();

  color.innerText = hexColor;
  document.body.style.backgroundColor = hexColor;
});
