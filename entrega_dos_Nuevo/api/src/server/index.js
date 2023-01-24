import { Server as WebSocket } from 'socket.io'
import http from 'http'
import app from './app.js'
import socket from './socket.js'
import '../database/mongoose/database.js'
const server = http.createServer(app)
const PORT = process.env.PORT || 8080
const httpServer = server.listen(PORT)
const io = new WebSocket(httpServer, {
  cors: {
    origin: '*'
  }
})
console.log(`Server on port ${PORT}`)
socket(io)
