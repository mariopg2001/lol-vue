import { Menu } from './menu.js'
import { Vista1 } from './vista1.js'
import { Vista3 } from './vista3.js'
import { Vista4 } from './vista4.js'
import { Vista2 } from './vista2.js'
import {Modelo} from './modelo.js'

class Controlador {
	constructor(){
		window.onload = this.iniciar.bind(this)
		this.modelo = new Modelo(this)

	}
	iniciar(){
		this.modelo = new Modelo()

		//this.menu = Menu.mount('#nav')
		//this.menu.controlador = this

		this.vista1 = new Vista1(this).mount('#vista1')
		//this.vista1.controlador = this

		this.vista2 = new Vista2(this).mount('#vista2')
		//this.vista2.controlador = this

		this.vista3 = new Vista3(this).mount('#vista3')
		this.menu= new Menu(this, this.vista3).mount('#nav')

		this.vista4 = new Vista4(this).mount('#vista4')

		this.cambiarAVista3()
	}
	cambiarAVista1(){
		console.log('cambiarAVista1')
		this.vista2.mostrar(false)
		this.vista1.mostrar(true)
	}
	
	cambiarAVista2(){
		console.log('cambiarAVista2')
		this.vista1.mostrar(false)
		this.vista3.mostrar(false)
		this.vista4.mostrar(false)
		
		this.vista2.mostrar(true)
	}
	cambiarAVista3(){
		console.log('cambiaradmin')
		this.vista1.mostrar(false)
		this.vista3.mostrar(true)
		this.vista2.mostrar(false)
		this.vista4.mostrar(false)

	}
	cambiarAVista4(){
		console.log('cambiarañadir')
		this.vista1.mostrar(false)
		this.vista4.mostrar(true)
		this.vista2.mostrar(false)
		this.vista3.mostrar(false)

	}
	insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	listar(){
		this.modelo.listar(this.listarOK.bind(this))
	}
	listarOK(Nombres){
		this.vista3.cargarlista(Nombres)
	}
	insertarOK(){
		console.log('La inserción ha ido bien')
	}
}
new Controlador()
