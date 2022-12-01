import KnexContenedor from '../container/KnexContenedor'
import { options } from '../database/configDB'
const productosApi = new KnexContenedor(options.mariaDB, 'productos')
const chatApi = new KnexContenedor(options.sqliteDB, 'chat')

// todo chequear estas funciones que realmente esten funcionando como se debe
async function productos() {
  const result = await productosApi.findAll()
  return result
}
async function chat () {
  const result = await chatApi.findAll()
  return result
}

export default (io) => {
  // const mensajes = []
  io.on('connection', async (socket) => {
    console.log(`Nueva conexion cliente ${socket.id}`)
    
    socket.on('client:chat', async (data) => {
      await chatApi.create(data)
      io.sockets.emit('server:chat', await chat)
      // todo Habilitar esto si las functions de arriba no funciona // eliminar sino
      // io.socket.emit('server:chat', await chatApi.findAll())
    })
    socket.emit('server:productos', await productos)
    // todo De no estar funcionando correctamente lo de arriba habilitar esto
    // socket.emit('server: productos', await productosApi.findAll())
    socket.on('client:product', async( data) => {
      await productosApi.create(data)
      socket.broadcast.emit('server:productos', await productos)
      // socket.broadcast.emit('server:productos', await productosApi.findAll())
    }) 
  })
}
