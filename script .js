const form = document.getElementById('simpleForm');
const nameInput = document.getElementById('name');
const message = document.getElementById('message');

function handleSubmit(event) {
    event.preventDefault();

    const name = nameInput.value;

    message.textContent = `Hello, ${name}! Your form has been submitted.`;
    message.style.display = 'block';

    form.style.display = 'none';
}

form.addEventListener('submit', handleSubmit);
