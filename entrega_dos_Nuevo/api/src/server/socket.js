export default (io) => {
  io.on('connection', async (socket) => {
    console.log(`New client ${socket.id}`)

    socket.on('client:chat', (data) => {
      socket.broadcast.emit('server:chat', {
        body: data,
        from: socket.id
      })
    })

    // Falta agregar para que envie y muestre los productos
    // en tiempo real
  })
}
