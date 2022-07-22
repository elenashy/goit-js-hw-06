const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', onInputText)

function onInputText(event) {
    output.textContent = event.currentTarget.value

    if (!output.textContent) {
        output.textContent = 'Anonymous'
    }
}