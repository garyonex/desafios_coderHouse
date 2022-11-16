import multer from 'multer'
import productRoutes from './src/routes/productos.routes.js'
import { Server as webSocket } from 'socket.io'
import http from 'http'
import app from './app.js'

// ? INICIO DE SERVIDOR PARA SOCKETS

const httpServer = http.createServer(app)
const io = new webSocket(httpServer)
const PORT = 8080
httpServer.listen(PORT)
console.log(`Servidor en puerto http://localhost:${PORT}`)


// ** multer

const storage = multer.diskStorage({
  destination: './src/public/files',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
app.use(
  multer({
    storage,
    dest: './src/public/files',
  }).single('imagen')
)

// app.get('/', (req, res) => {
//   res.render('index.html')
// })
app.use('/api/productos', productRoutes)

//** Inicio de sockets */
const mensaje = []

io.on('connection', (socket) => {
  console.log(`Nueva conexion cliente ${socket.id}`)
  socket.emit('hello', 'world')
  socket.on('client:chat', (data) => {
    const chat = { ...data }
    console.log(data)
    mensaje.push(chat)
    io.sockets.emit('server:chat', chat)
  })
})
