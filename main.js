/*

Transiciones

      -     Se coloca dentro del componente <transition>...</transition> el elemento al que se le aplicara la transicion
      -     Se le coloca el atributo name="nombreTransicion" al componente <transition name="nombreTransicion">
      -     Para que se anime al cargar la pagina (en initial render) se le agrega el atributo appear al componente <transition>
                  <transition name="nombreTransicion" appear>
      -     Se crean las clases css correspondientes
            -     nombreTransicion-enter
            -     nombreTransicion-enter-active
            -     nombreTransicion-leave-to
            -     nombreTransicion-leave-active

      -     En las transiciones entre elementos, si son elementos del mismo tipo (dos <h1>...), es necesario establecer un atributo
            key="identificador" a cada uno, donde indentificador los diferencia
            
            Ademas para evitar que un elemento se superponga o monte al otro durante la transicion, se agrega el atributo
            modo="" con los posibles valores de in-out, out-in en el componente transition <transition modo="">

      -     Es posible agregar librerias externas de animaciones como animate.css, e indicar sus respectivas clases

*/

new Vue ({
      el: 'main',
      data: {
            mostrar: true,
            mensajes: {
                  transicion: 'Transiciones con Vue.js',
                  animacion: 'Animaciones con Vue.js',
                  animationCustom: 'Animaciones custom cn Vue.js',
                  entreElementos: 'Transiciones entre elementos con Vue.js'
            }
      }
});