import { Server as WebSocket } from 'socket.io'
import http from 'http'
import app from './app'

const server = http.createServer(app)
const PORT = 8080
const httpServer = server.listen(PORT)
const io = new WebSocket(httpServer)
console.log(`Server on port ${PORT}`)
socket(io)
