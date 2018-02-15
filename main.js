// Directivas incluidas //
// -- Renderizado condicional -- //

/*
      v-show                  -> Muestra u oculta (cambiando la propiedad display a none) elementos html, segun el modelo || El elemento sigue estando en el DOM


      Paralelismo con las estructuras de control (if, if else, else) de JS
            v-if="condicion"        -> Muestra o no (Elimina el elemento del DOM <!---->) elementos segun la condicion
            v-else-if="condicion"   -> Muestra o no (Elimina el elemento del DOM <!---->) el elemento segun la condicion
            v-else                  -> Muestra o no (Elimina el elemento del DOM <!---->) Si no se han cumplido las condiciones anteriores

      Se pueden renderizar condicionalmente varios elementos poniendolos dentro de un template
            <template>
                  <></>
                  <></>
                  <></>
            </template>

*/

const vm = new Vue ({
     el: 'main',
     data: {
           conectado: false,
           edad: 44
     } 
});