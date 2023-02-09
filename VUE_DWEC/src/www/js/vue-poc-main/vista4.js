import {Campeon} from './Campeon.js'

export function Vista4(controlador){
	return Vue.createApp({
	data() {
    	return {
			controlador: controlador,
			titulo: 'Vista 4',
			clase: 'inactivo',
			cosa: {
				nombre: null,
				descripcion: null,
				posiciones:null,
				imagen:null,
				opciones:null,
				fecha: null,
				base64:null,
			}
    	}
  	},
	template: `
		<div :class="clase">
			<h1>Añadir</h1>
			<div class="cuadro1">
				<div id="anadirform">
					<label tabindex="5" aria-label="selecciona una imagen">Selecciona una imagen del personaje: </label><br>
					<input type="file" tabindex="6" name="imagencamp" @change=capturarImagen :src=cosa.imagen id="inputcampeon" accept="image/*"  />
					<br><br>
					<label tabindex="7" aria-label="Introduce el nombre">Introduce el Nombre: </label>
					<input tabindex="8" type="text" name="nombrecamp" v-model="cosa.nombre" id="nombrecampeon" placeholder="Ezreal"  />
					<br><br>
					<label tabindex="9" aria-label="Introduce descripcion"  >Introduce descripcion del personaje:</label><br>
					<textarea tabindex="10" title="Jquery uii Descripcion" v-model="cosa.descripcion" type="text" name="descripcioncamp"  id="descripcioncampeon"   ></textarea><br><br>
					
					<label tabindex="11" aria-label="Selecciona la posicion">Seleciona la posición del personaje:</label><br><br>
					<input aria-label="ADC" v-model="cosa.opciones" tabindex="12" type="checkbox" name="adc" id="posicion1" />ADC &nbsp;&nbsp;&nbsp;
					<input aria-label="Support" v-model="cosa.opciones" tabindex="13" type="checkbox" name="sup" id="posicion2" />Support<br>
					<input aria-label="Jungla" tabindex="14" v-model="cosa.opciones" type="checkbox" name="jungla" id="posicion3" />Jungla &nbsp;&nbsp;&nbsp;
					<input aria-label="Top" tabindex="15" type="checkbox" v-model="cosa.opciones" name="top" id="posicion4" />Top<br>
					<input aria-label="Mid" tabindex="16" type="checkbox" v-model="cosa.opciones" name="mid" id="posicion5" />Mid<br>
					
					<br>
					<label tabindex="17" aria-label="selecciona el tipo de campeon">Tipo de campeon:</label><br>
					<input v-model="cosa.posiciones" aria-label="Mago" tabindex="18" type="radio" id="opcion1" class="check" name="tipo" value="Mago" /> 
					<label>Mago</label><br>
					<input v-model="cosa.posiciones" aria-label="Asesino" tabindex="19" type="radio" id="opcion2" class="check" name="tipo" value="Asesino" /> 
					<label>Asesino</label> <br>
					<input v-model="cosa.posiciones" aria-label="Tanque" tabindex="20" type="radio" id="opcion3" class="check" name="tipo" value="Tanque" /> 
					<label>Tanque</label><br>
					<input v-model="cosa.posiciones" aria-label="Gerrero" type="radio" tabindex="21" id="opcion4" class="check" name="tipo" value="Guerrero" /> 
					<label>Guerrero</label><br>
					<br>
					<label>Seleciona el año de creacion:</label>
					<input tabindex="22" aria-label="Añade la fecha de creacion" type="date" v-model="cosa.fecha" name="fechacreacion" id="fechacreacion"/>
					<br><br>
				</div>
				<br><br>
				<input type="checkbox" name="acepto" id="acepto" />Acepto sin reserva...<br>

				<button tabindex="23" @click=insertar aria-label="Añadir" id="prueba"> añadir</button>
				<button tabindex="24" aria-label="Cancelar" id="volver"> Cancelar</button>

				
			</div>
		</div> `,
	methods: {
		mostrar(activo){
			if (activo)
				this.clase = 'activo'
			else
				this.clase = 'inactivo'
		},
		capturarImagen(event) {
			//Imagen base64   
			let imagen = document.getElementById('inputcampeon')

			const archivo = imagen.files[0]
			const lector = new FileReader()

			lector.addEventListener('load', () => {
				this.cosa.base64 = lector.result
			})
			lector.readAsDataURL(archivo)
		},
		insertar(){
			console.log('insertar' + ' '+this.cosa.nombre)
			let objeto = new Campeon(this.cosa.nombre,this.cosa.descripcion,this.cosa.posiciones,this.cosa.base64,this.cosa.opciones,this.cosa.fecha )
			this.controlador.insertar(objeto)
		}
	}
})
}

