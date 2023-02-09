import {Nombre} from './Nombre.js'

export function Vista3(controlador){
	return Vue.createApp({
	data() {
    	return {
			controlador: controlador,
			titulo: 'Vista 3',
			clase: 'inactivo',
			cosa: {
				nombre: null
			}
    	}
  	},
	template: `
		<div :class="clase">
			<h1>Admin</h1>
			<div id="busqueda">
				<span >Busqueda:</span>
				<select name="select" id="select">
					<option id='mago' value="mago">Mago</option>
					<option id='asesino' value="asesino" >Asesino</option>
					<option id='tanque' value="tanque">Tanque</option>
					<option id='Gerrero' value="Gerrero">Guerrero</option>
					<option  value="Tipo de campeon" hidden selected>TIPO DE CAMPEON</option>
				</select>
				<button id="buscar">Buscar</button>	
			</div>
			<div dir="contenedor" class="contenedor" id="cont1">
			<!-- <span id="anadir"> <i class="fa-solid fa-plus"></i></span> -->
			</div>
		</div>
	`,
	methods: {
		mostrar(activo){
			if (activo)
				this.clase = 'activo'
			else
				this.clase = 'inactivo'
		},
		listar() {
			this.controlador.listar()
		},
		cargarlista(campeones) {
			this.divindex = document.getElementsByClassName('contenedor')[0]
			this.divindex.textContent = ''
			console.log('estamos aqui listando')
			// console.log(this.divindex)
			campeones.forEach(element => {
			this.divtarjeta=document.createElement("div")
			this.divtarjeta.classList.add("contenedorimagen")
			this.divindex.appendChild(this.divtarjeta)

			//imagen
			this.imagen=document.createElement('img')
			this.imagen.classList.add("champ")
			this.imagen.src= element.imagen
			this.divtarjeta.appendChild(this.imagen)

			//contenedor de los iconos
			this.divicono=document.createElement('div')
			this.divicono.classList.add( 'contenedoricono')
			this.divtarjeta.appendChild(this.divicono)

			//icono modificar
			this.spanedit=document.createElement('span')
			this.spanedit.classList.add('icono')
			this.spanedit.setAttribute("id", "mod")
			this.divicono.appendChild(this.spanedit)
			this.iconoedit=document.createElement('i')
			this.iconoedit.classList.add('fa-solid')
			this.iconoedit.classList.add('fa-pen')
			this.spanedit.appendChild(this.iconoedit)

			//icono eliminar
			this.spanborrar=document.createElement('span')
			this.spanborrar.classList.add('icono')
			this.divicono.appendChild(this.spanborrar)
			this.iconoborrar=document.createElement('i')
			this.iconoborrar.classList.add('fa-sharp')
			this.iconoborrar.classList.add('fa-solid')
			this.iconoborrar.classList.add('fa-trash')
			this.spanborrar.appendChild(this.iconoborrar)

			//icono lupa
			this.spanlupa=document.createElement('span')
			this.spanlupa.classList.add('icono')
			this.divicono.appendChild(this.spanlupa)
			this.iconolupa=document.createElement('i')
			this.iconolupa.classList.add('fa-sharp')
			this.iconolupa.classList.add('fa-solid')
			this.iconolupa.classList.add('fa-magnifying-glass')
			this.spanlupa.appendChild(this.iconolupa)
			})
		}
	}
})
}

