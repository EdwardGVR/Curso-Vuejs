/*
Instancia Vue
      Es el intermediario entre el DOM y la logica de la aplicacion

      Cuando montamos la instacia Vue, automaticamente se crean getters y setters para las propiedades del modelo qu es lo que hace que sean reactivos.
            Por lo que si despues de montar la instancia, se le agregan propiedades desde fuera, estas nuevas propiedades no seran reactivas, ya que no 
            tendran sus respectivos getters y setters

      Se pueden tener varias instancias Vue


      *** Ciclo de vida de la instacia Vue ***
            -     new Vue ()
            -     beforeCreate
            -     created
            -     beforeMount
            -     mounted

            ---   Cuando cambia el modelo   ---

                        -     beforeUpdate
                        -     updated
            
            -     beforeDestroy
            -     destroyed


*/


// Instancia 1
const vm1 = new Vue ({
      el: 'main',
      data: {
            mensaje: 'Instancia Vue 1'
      },
      beforeUpdate() {
            console.log('beforeUpdate', this.mensaje);
            
      },
      updated() {
            console.log('updated', this.mensaje);
            
      },
      methods: {
            alReves () {
                  this.mensaje = this.mensaje.split('').reverse().join('');
                  // vm2.mensaje = 'Cambiado desde instancia 1';
            }
      },
      computed: {
            mensajeMayusculas () {
                  return this.mensaje.toUpperCase();
            }
      }
});


// Instancia 2
const vm2 = new Vue ({
      el: '#app',
      data: {
            mensaje: 'Instancia Vue 2'
      }
});