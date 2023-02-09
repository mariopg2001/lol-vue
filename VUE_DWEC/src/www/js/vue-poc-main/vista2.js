import {Nombre} from './Nombre.js'

export function Vista2(controlador){
	return Vue.createApp({
	data() {
    	return {
			controlador: controlador,
			titulo: 'Vista 2',
			clase: 'inactivo',
			cosa: {
				nombre: null
			}
    	}
  	},
	template: `<div :class="clase">
			<h1>ALTA DE COSA</h1>
			<p>
				<label >
					Nombre: 
					<input type="text" v-model="cosa.nombre" />
				</label>
				<h1>{{cosa.nombre}}</h1>
				<button @click="insertar" >Insertar</button>
			</p>
		</div> `,
	methods: {
		mostrar(activo){
			if (activo)
				this.clase = 'activo'
			else
				this.clase = 'inactivo'
		},
		insertar(){
			console.log('insertar' + ' '+this.cosa.nombre)
			let objeto = new Nombre(this.cosa.nombre)
			this.controlador.insertar(objeto)
		}
	}
})
}

