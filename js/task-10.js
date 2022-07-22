function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('.number')
const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')

// buttonCreate.addEventListener('click', onButtonCreateClick)
// buttonDestroy.addEventListener('click', onButtonDesrtoyClick)
input.addEventListener('input', onRangeInput)

// function onTextInput(event) {
//   console.log(event.currentTarget.value)
  
// }