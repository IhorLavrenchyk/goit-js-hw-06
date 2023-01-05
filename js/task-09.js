function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btn.addEventListener('click', changecolor);

function changecolor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  textEl.textContent = color;
}
