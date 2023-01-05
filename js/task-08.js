const form = document.querySelector('.login-form');

form.addEventListener('submit', handlesubmit);

function handlesubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('Alert!!! Check all filds, All filds must be full');
  }
  const obj = {
    login: email.value,
    password: password.value,
  };

  console.log(obj);
  event.currentTarget.reset();
}
