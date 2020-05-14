var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.querySelector(".randomBtn");

//Set Early Color
gradientBackground();

//Listener
color1.addEventListener("input", gradientBackground);
color2.addEventListener("input", gradientBackground);
btnRandom.addEventListener("click", getRandomGradient);

function gradientBackground() {
  setBackground(color1.value, color2.value);
}

function getRandomGradient() {
  var randomColor1 = randomColor();
  var randomColor2 = randomColor();
  setBackground(randomColor1, randomColor2);

  color1.value = randomColor1;
  color2.value = randomColor2;
}

function setBackground(color1, color2) {
  body.style.background =
    "linear-gradient(to right," + color1 + "," + color2 + ")";

  css.textContent = body.style.background;
}

//Generate Random Color Code
function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
