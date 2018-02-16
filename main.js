/*
Filtros
      En la version 1 de Vue, se incluian diferentes filtros establecidos para colecciones de datos,
      actualmente se recomienda crearlas uno mismo como computed properties, sin embargo, es posible usar librerias
      que brinden las funcionalidades anteriores como underscore o Lodash
*/


// El filtro debe estar definido antes de la instancia de Vue
Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

const vm = new Vue ({
      el: 'main',
      data: {
            busqueda: '',
            minimo: 5,
            juegos: [
                  {
                     titulo: 'Battlefield 1',
                     genero: 'FPS',
                     puntuacion: 9            
                  },
                  {
                     titulo: 'Civilization VI',
                     genero: 'Estrategia',
                     puntuacion: 10
                  },
                  {
                     titulo: 'Resident Evil 7',
                     genero: 'Survival Horror',
                     puntuacion: 7
                  },
                  {
                     titulo: 'League of Legends',
                     genero: 'MOBA',
                     puntuacion: 4
                  }
            ]
      },
      computed: {
            mejoresJuegos () {
                  return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
            },
            buscarJuego () {
                  return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
            }
      }
});