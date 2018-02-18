/*

Utilizar ajax en Vue con vue-resource


*/

new Vue ({
      el: 'main',
      // Cuando la instancia esta lista
      mounted() {
            // console.log('Instancia montada');
            this.cargarPersonas();
      },
      data: {
            personas: []
      },
      methods: {
            cargarPersonas () {
                  // Basado en promesas
                  this.$http.get('https://randomuser.me/api/?results=500')
                        .then((respuesta) => {
                              // console.log(respuesta);
                              this.personas = respuesta.body.results;
                        });
            }
      }
});