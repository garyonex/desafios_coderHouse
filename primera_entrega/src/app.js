import express from 'express'
import multer from 'multer'
import productosRoutes from './routes/productos.routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})
app.use('/api/productos', productosRoutes)
export default app