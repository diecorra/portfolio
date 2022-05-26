const HOME_TEXT = [
  " a FrontEnd Developer.",
  " passionate about UX/UI.",
  " Diego Corradi.",
];
let i = 0;
let home_text = document.getElementById("home_text");
let interval2 = true;
let interval3 = 0;
let interval;

// add char
const addLastChar = (text, count) => {
  if (home_text.textContent.length != text.length + 3) {
    home_text.textContent += text.substring(count, count + 1);
    interval3 += 1;
  } else {
    i = i == 2 ? 0 : i + 1;
    interval2 = true;
    interval3 = 0;
  }
};

// delete last char
const delLastChar = () => {
  if (home_text.textContent.toUpperCase() !== "I'M") {
    home_text.textContent = home_text.textContent.substring(
      0,
      home_text.textContent.length - 1
    );
    interval2 = true;
  } else {
    interval2 = false;
  }
};

const prova = () => {
  if (interval2) {
    delLastChar();
  } else {
    addLastChar(HOME_TEXT[i], interval3);
  }
};

// start
interval = setInterval(prova, 120);

function myFunction() {
  var element = document.getElementById("prova");
  element.classList.toggle("prova");
}
