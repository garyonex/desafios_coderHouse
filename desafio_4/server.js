import express from 'express'
import multer from 'multer'
import productRoutes from './src/routes/productos.routes.js'
import { Server as webSocket } from 'socket.io'
import http from 'http'
import { productosTotal } from './src/controllers/productosControllers.js'
const app = express()
const httpServer = http.createServer(app)
const io = new webSocket(httpServer)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')
const { pathname: root } = new URL('../src/views', import.meta.url)
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

//**---- INICIO DE SERVIDOR */
const PORT = 8080
// const server = app.listen(PORT, () =>
//   console.log(`🚧 Server on http://localhost:${PORT}`)
// )
// server.on('error', (err) => console.log(err))

httpServer.listen(PORT)
console.log(`🚧 Server on http://localhost:${PORT}`)

app.get('/', (req, res) => {
  res.render('productos.ejs')
})
app.use('/api/productos', productRoutes)

const mensajes = []

io.on('connection', (socket) => {
  console.log(`Nueva conexion cliente ${socket.id}`)
  socket.emit('server:productos', productosTotal())
  socket.emit('server:mensajes', mensajes)

  socket.on('client:chat', (data) => {
    const chat = { ...data }
    mensajes.push(chat)
    io.sockets.emit('server:chat', chat)
  })
})
