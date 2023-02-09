export function Menu(controlador, vista31){
	return Vue.createApp({
	data() {
		return {
			controlador:controlador,
			vista31:vista31
		}
	},
	template: `
			<ul>
				<li tabindex="1" id="logo" @click=vista3><img aria-label="Volver a Inicio" src="../../assets/logo3.png"></li>
				<li tabindex="2" @click=vista4 id="anadir">Añadir</li>
				
			</ul>`,	
	methods: {
		
		vista3(evento){
			console.log('vista de admin')
			this.controlador.cambiarAVista3()
			this.vista31.listar()
		},
		vista4(evento){
			console.log('vista añadir')
			this.controlador.cambiarAVista4()
		}

	}
})

}
