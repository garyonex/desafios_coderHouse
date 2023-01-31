import KnexContenedor from '../container/KnexContenedor'
import { options } from '../database/configDB'
const productosApi = new KnexContenedor(options.mariaDB, 'productos')
const chatApi = new KnexContenedor(options.sqliteDB, 'chat')

// todo chequear estas funciones que realmente esten funcionando como se debe
async function productos() {
  const result = await productosApi.findAll()
  return result
}
async function chat() {
  const result = await chatApi.findAll()
  console.log(result)
  return result
}

export default (io) => {
  // const mensajes = []
  io.on('connection', async (socket) => {
    console.log(`Nueva conexion cliente ${socket.id}`)
    io.sockets.emit('server:productos', productos)
    // todo De no estar funcionando correctamente lo de arriba habilitar esto
    // io.sockets.emit('server:productos', await productosApi.findAll())
    socket.on('client:product', async (data) => {
      await productosApi.create(data)

      // socket.broadcast.emit('server:productos', await productos)
      io.sockets.emit('server:productos', await productosApi.findAll())
    })
    io.sockets.emit('server:message', await chatApi.findAll())
    socket.on('client:chat', async (data) => {
      const result = await chatApi.create(data)
      console.log(result)
      // io.sockets.emit('server:chat', await chat)
      // todo Habilitar esto si las functions de arriba no funciona // eliminar sino
      io.sockets.emit('server:chat', await chat)
    })
  })
}
