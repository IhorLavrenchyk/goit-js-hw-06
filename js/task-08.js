const form = document.querySelector('.login-form');

form.addEventListener('submit', handlesubmit);

function handlesubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim === '' || password.value === '') {
    return alert('Alert!!! Check all filds, All filds must be full');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
