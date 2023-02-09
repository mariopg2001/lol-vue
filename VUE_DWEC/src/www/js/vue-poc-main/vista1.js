export function Vista1(controlador) {
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista 1',
				clase: 'inactivo',

			}
		},
		template: `<div :class="clase">
		<h1>LISTA DE COSA</h1>
		<p>
		<div id="vista12">
		<p class="contenedornombre">
			hola
		</p>	
		</div>
			<button @click="listar" >Listar</button>
		</p>
		</div> `,
		methods: {
			mostrar(activo) {
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
			listar() {
				
				this.controlador.listar()
			},
			cargarlista(Nombres) {
				this.divindex = document.getElementById("vista12")
				this.contenedor = document.getElementsByClassName('contenedornombre')[0]
				this.divindex.appendChild(this.contenedor)

				this.divindex.textContent = ''


				Nombres.forEach(element => {

					let div = document.createElement('div')

					let texto = document.createElement('p')
					texto.textContent = element.nombre

					this.divindex.appendChild(div)
					div.appendChild(texto)
				});
				/*
			while (this.divindex.firstChild)
			{
				
				
				for(let nombre of Nombres){
				this.nombre1=document.createElement("p")
				this.nombre1.textContent = nombre['nombre'] 
				this.contenedor.appendChild(this.nombre1)
				}
			}
			*/
			}
		}
	})
}

