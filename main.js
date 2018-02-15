// Reactividad

// Vanilla js

const h1 = document.querySelector('h1'),
      input = document.querySelector('input');

input.addEventListener('keyup', () => h1.innerText = input.value);