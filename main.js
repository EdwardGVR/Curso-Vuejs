/*

Utilizar ajax en Vue con axios


*/

// Para poder cambiar mas facilmente de axios a vue-resource
Vue.prototype.$http = axios;

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
                  // Axios
                  axios.get('https://randomuser.me/api/?results=500')
                        .then((respuesta) => {
                              // console.log(respuesta);
                              this.personas = respuesta.data.results;
                        });
                  
                  // vue-resource
                  // this.$http.get('https://randomuser.me/api/?results=500')
                  //       .then((respuesta) => {
                  //             // console.log(respuesta);
                  //             this.personas = respuesta.data.results;
                  //       });
            }
      }
});