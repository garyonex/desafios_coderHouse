export default (io) => {

  io.on('connection', (socket) => {
    console.log(`New client ${socket.id}`)
  })
}