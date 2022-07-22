function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body')
const button = document.querySelector('button')
const spanEl = document.querySelector('span')

button.addEventListener('click', onButtonClick)

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor()
}
