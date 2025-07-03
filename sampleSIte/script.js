// Change background color randomly on button click
const colorBtn = document.getElementById('color-btn');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Simple form submission handling
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(name && email && message) {
    status.textContent = `Thank you, ${name}! Your message has been sent.`;
    status.style.color = 'green';
    form.reset();
  } else {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
  }
});
