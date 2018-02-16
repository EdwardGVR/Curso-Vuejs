// Instaladas las Vue Developer Tools en Firefox

/*
Propiedades computadas
      Se declaran dentro del objeto computed de la instancia Vue
      Se usan para no saturar de logica la vista, ya que esta se realiza de este lado y se retorna el resultado

      computed vs methods
            Se puede lograr los mismos resultados con ambos, sin embargo, se diferencian en que los
            methods son re evaluados cada vez que se llaman, en cambio las computed solo se re evaluan
            cuando cambia el modelo, es decir que si volvemos a llamar una computed propertie sin que el modelo
            haya cambiado, la segunda llamada sera cargada desde cache.
*/

const vm = new Vue ({
      el: 'main',
      data: {
            mensaje: 'Hola VueJS',
            nuevaTarea: null,
            tareas: [
                  {
                        titulo: 'Aprender Vue.js',
                        prioridad: true,
                        antiguedad: 23
                  },
                  {
                        titulo: 'Aprender ES6',
                        prioridad: true,
                        antiguedad: 123
                  },
                  {
                        titulo: 'Publicar algo',
                        prioridad: false,
                        antiguedad: 378
                  }
            ]
      },
      methods: {
            agregarTarea () {
                  // this, hace referencia a la instancia Vue
                  this.tareas.unshift(this.nuevaTarea);
                  this.nuevaTarea = '';
            }
      },
      computed: { // Propiedades computadas
            mensajeAlReves () {
                  return this.mensaje.split('').reverse().join('');
            },
            tareasConPrioridad() {
                  return this.tareas.filter((tarea) => tarea.prioridad);
            },
            tareasPorAntiguedad () {
                  return this.tareas.sort( (a, b) => b.antiguedad - a.antiguedad );
            }
      }
});


// Vanilla JS
// function agregarTarea () {
//       const input = document.querySelector('input[type=text]');
//       vm.tareas.unshift(input.value);
//       input.value = '';
// }