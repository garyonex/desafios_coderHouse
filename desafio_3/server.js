import express from 'express'
import productRoutes from './routes/productos.routes.js'
import multer from 'multer'
import ejs from 'ejs'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('views')
app.set('view engine', 'ejs')
const { pathname: root } = new URL('../view', import.meta.url)
// ** multer
const storage = multer.diskStorage({
  destination: './public/files',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
app.use(
  multer({
    storage,
    dest: './public/files',
  }).single('myFile')
)
//**---- INICIO DE SERVIDOR */
const PORT = 8080
const server = app.listen(PORT, () =>
  console.log(`🚧 Server on http://localhost:${PORT}`)
)
server.on('error', (err) => console.log(err))

// routes
app.get('/', (req, res) => {
  res.render('index.ejs', {
    productos: file
  })

})

app.use('/productos', productRoutes)
