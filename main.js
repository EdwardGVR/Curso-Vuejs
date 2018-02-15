const vm = new Vue ({
     el: 'main',
     data: {
           laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
           tareas: [
                 { nombre: 'Hacer la compra', prioridad: 'baja' },
                 { nombre: 'Aprender Vue y Firebase', prioridad: 'alta' },
                 { nombre: 'Ir al gimnasio', prioridad: 'media' }
           ],
           persona: {
                 nombre: 'Juan',
                 profesion: 'dev',
                 ciudad: 'Valencia'
           }
     }

});