import KnexContenedor from '../container/KnexContenedor'
import { options } from '../database/configDB'
const productosApi = async () => {
  new KnexContenedor(options.mariaDB, 'productos')
}
const productos = await productosApi.findAll()
export default (io) => {
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
