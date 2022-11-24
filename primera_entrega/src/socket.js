import Contenedor from './container/Contenedor'
const contenedorProductos = new Contenedor('productos.json')
export default (io) => {
  const mensajes = []
  const productos = contenedorProductos.getAll()
  io.on('connection', async (socket) => {
    console.log(`New client ${socket.id}`)

    socket.on('client:chat', (data) => {
      const chat = { ...data }
      mensajes.push(chat)
      io.sockets.emit('server:chat', chat)
    })
    socket.emit('server:productos', await productos)
    socket.on('client.product', async (data) => {
      await contenedorProductos.save(data)
      socket.emit('server:productos', await productos)
    })
  })
}
