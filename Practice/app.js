Vue.component('mi-titulo', {
	template: `<h1>Vue Title</h1>`
});

Vue.component('lista-dias', {
	props: ['listado'],
	template: `<ul><li v-for="dia in listado" v-text="dia"></li></ul>`,
	// data () {
	// 	return {
	// 		dias: [
	// 			'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
	// 		]
	// 	}
	// }
});

new Vue ({
	el: 'main',
	data: {
		title: 'Title',
		dias: [
			'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
		],
		finde: [
			'Viernes', 'Sabado', 'Domingo'
		]
	}
});
