// Reactividad

// Vanilla js

// const h1 = document.querySelector('h1'),
//       input = document.querySelector('input');

// input.addEventListener('keyup', () => h1.innerText = input.value);



// Vue.js

new Vue ({
      el: 'main',       // el -> elemento, la etiqueta a partir de la cual tendra scope la instancia
      data: {           // El modelo, la fuente de datos de la instancia
            mensaje: 'Hola mundo!!'
      }
});