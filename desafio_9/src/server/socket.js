import Contenedor from '../container/Contenedor'
import { init, productosTotal } from '../controllers/productosControllers'
const productos = productosTotal()
export default (io) => {
 
  console.log(typeof(productos))
  const mensajes = []
  io.on('connection', (socket) => {
    console.log(`Nueva conexion cliente ${socket.id}`)

    socket.on('client:chat', (data) => {
      const chat = { ...data }
      mensajes.push(chat)
      io.sockets.emit('server:chat', chat)
    })
    socket.emit('server:productos', productos)
  })
}
