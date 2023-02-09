import {Idb} from './idb.js'

export class Modelo{
	constructor( controlador){
		console.log('Modelo creado')
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
		this.controlador = controlador
		this.idb = new Idb()
	}
	avisar(){
	    for(let callback of this.callbacks)
	    callback()
	}
	insertar(objeto, callback){
		this.idb.insertar(objeto, callback)
	}
	listar(callback){
		this.idb.listar(callback)
	}
	
}
