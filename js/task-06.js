const input = document.querySelector('#validation-input')
const validInput = parseInt(input.getAttribute('data-length'))
input.addEventListener('blur', onTextInput)

function onTextInput(event) {
    input.textContent = event.currentTarget.value

    if (input.textContent.length === validInput) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}