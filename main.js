/*

Componentes - Introduccion

Los componentes deben declarar su modelo como una funcion para que sean unicos

*/

// Vue.prototype.$http = axios;

Vue.component('mi-componente', {
      template: `<h1>Componente Vue</h1>`
});

Vue.component('mis-tareas', {
      // props -> Para comunicarse desde fuera con el componente
      // props: ['tareas'],
      template: `<ul><li v-for="tarea in tareas" v-text="tarea.title"></li></ul>`,
      mounted() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
            // .then -> cuando tenga la respuesta
            .then((respuesta) => {
                  this.tareas = respuesta.data;
            });
      },
      data() {
            return {
                  tareas: [],
            }
      }
});

new Vue ({
      el: 'main',
      // mounted() {
      //       axios.get('https://jsonplaceholder.typicode.com/todos')
      //       // .then -> cuando tenga la respuesta
      //       .then((respuesta) => {
      //             this.tareasAjax = respuesta.data;
      //       });
      // },
      // data: {
      //       tareasAjax: [],
      //       tareasLocales: [
      //             {title: 'Hacer la compra'},
      //             {title: 'Aprender Vue'},
      //             {title: 'Aprender ES6'}
      //       ]
      // }
});