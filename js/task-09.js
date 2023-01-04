function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor();
const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btn.addEventListener('click', changecolor);

function changecolor() {
  bodyEl.style.backgroundColor = color;
  textEl.textContent = color;
}
