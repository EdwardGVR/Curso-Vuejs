/*

Componentes - Introduccion

*/

new Vue = ({
      el: 'main',
      mounted() {
            this.cargarTodoList();
      },
      methods: {
            cargarTodoList () {
                  axios.get('https://jsonplaceholder.typicode.com/todos')
                  .then((respuesta) => {
                        this.tareasAjax = respuesta.body;
                  });
            }
      },
      data: {
            tareasAjax: []
      }
});