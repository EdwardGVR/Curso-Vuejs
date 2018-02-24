/*

Component templates

4 formas principales de definirlas:
      - inline (directamente en la opcion template del componente)      -> template: `<h1>La template</h1>`,

      - Por medio de una etiqueta script en el html                     -> <script type="text/template" id="id-del-template"> <h1>La template</h1> </script>

      - Por medio de la etiqueta template en el html                    -> <template id="id-del-template"> <h1>La template</h1> </template>

      - inline (dentro de la invocacion del componente en el html)      -> <mi-componente inline-template> <h1>La template</h1> </mi-componente>
            Reduce la reusabilidad                                            -- Al usarse esta forma, no es necesaria la opcion template: ``, en la definicion
                                                                                 del componente
*/

Vue.component('elegir-ganador', {
      props: ['listado'],
      // referenciar el template por el id (se define en <script type="text/template" id="id-del-template">EL TEMPLATE VA AQUI</script>)
      template: `#elegir-ganador-template`,
      // template:  `<div>
      //                   <h1 v-if="ganador">El ganador es: {{ ganador }}</h1>

      //                   <template v-else>
      //                         <h1>Participantes</h1>
      //                         <ul>
      //                               <li v-for="persona in listado">{{ persona }}</li>
      //                         </ul>
      //                   </template>
      //                   <button @click="elegirGanador">Elegir ganador</button>
      //             </div>`,
      methods: {
            elegirGanador () {
                  let cantidad = this.participantes.length,
                      indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice - 1];
            }
      },
      data () {
            return {
                  ganador: false,
                  participantes: this.listado
            }
      }
});

new Vue ({
      el: 'main',
      data: {
            personas: [
                  'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
            ]
      }
});