const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', oninputBlur);

function oninputBlur(event, oninputBlurRemove) {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else if (event.currentTarget.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
}
