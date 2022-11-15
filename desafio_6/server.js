import express from 'express'
import multer from 'multer'
import Contenedor from './src/Contenedor.js'
import productRoutes from './src/routes/productos.routes.js'

const app = express()
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
const server = app.listen(PORT, () =>
  console.log(`🚧 Server on http://localhost:${PORT}`)
)
server.on('error', (err) => console.log(err))

app.get('/', (req, res) => {
  res.render('productos.ejs')
})
app.use('/api/productos', productRoutes)



//** Inicio de sockets */

const mensaje = []

io.on('connnection', (socket) => {
  console.log(`Nueva conexion cliente ${socket.id}`);
  socket.on('client:chat', (data) => {
    const chat = { ...data }
    mensajes.push(chat)
    io.sockets.emit('server:chat', chat)
  })
})