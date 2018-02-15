// Instaladas las Vue Developer Tools en Firefox

/*
Eventos
      directiva: v-on:event="method""

      method debe estar definido en el objeto methods de la instancia de Vue
*/

const vm = new Vue ({
      el: 'main',
      data: {
            nuevaTarea: null,
            tareas: [
                  'Aprender Vue.js',
                  'Aprender ES6',
                  'Publicar algo todos los dias'
            ]
      },
      methods: {
            agregarTarea() {
                  // this, hace referencia a la instancia Vue
                  this.tareas.unshift(this.nuevaTarea);
                  this.nuevaTarea = '';
            }
      }
});


// Vanilla JS
// function agregarTarea () {
//       const input = document.querySelector('input[type=text]');
//       vm.tareas.unshift(input.value);
//       input.value = '';
// }