import { cargar } from "./main"
import { render } from "./main"
import { displayProductos } from "./main"

const socket = io()

const notes = document.getElementById('notes')
socket.on('server:productos', (productos) => {
    const productosListen = productos.content
    console.log(productosListen)
    displayProductos(productosListen)

})

socket.on('server:chat', (data) => {
    render(data)
})
socket.on('server:mensajes', (mensaje) => {
    cargar(mensaje)
})
