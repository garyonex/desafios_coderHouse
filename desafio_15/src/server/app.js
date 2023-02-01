import express from 'express'
import path from 'path'
import multer from 'multer'
import { engine } from 'express-handlebars'
import productRoutes from '../routes/products.routes'
import addProductsRoutes from '../routes/addProducts.routes'
// import morgan from 'morgan'
// ? logica para cluster
// -------
const app = express()
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', '../views')
app.set('view engine', 'hbs')
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
// loggers + morgan
app.use(morgan ( () => {
  const msg =[
    tokens.method(req, res),
    tokens.url(req,res),
    tokens.status(req,res),
    token.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
  ].join(' ')
  loggers.http(msg)
  return null
} ))
//Seteo - motor de plantilla

app.set('views', path.join(__dirname, '../views'))
app.engine(
  '.hbs',
  engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  })
)
app.get('/', (req, res) => {
  res.render('index')
})
//routes
app.use('/api/products', productRoutes)
app.use('/api/addProducts', addProductsRoutes)
export default app

