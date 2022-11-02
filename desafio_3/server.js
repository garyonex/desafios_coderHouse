import express from 'express'
import Contenedor from '../desafio_2/Contenedor'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
let productos = null

//**---- INICIO DE SERVIDOR */
const PORT = 8080
const server = app.listen(PORT, () =>
  console.log(`🚧 Server on http://localhost:${PORT}`)
)
server.on('error', (err) => console.log(err))

const productosTotal = () => {
  const container = new Contenedor()
  const file = './products.txt'
  const allProductArray = container.read(file)
  return allProductArray
}

const productRandom = () => {
  const container = new Contenedor()
  const file = './products.txt'
  const allProductArray = container.read(file)
  const randomIndex = Math.floor(Math.random() * allProductArray.length)
  return allProductArray[randomIndex]
}

const init = () => {
  console.log('iniciando ...')
  productos = productosTotal()
  console.log('Productos Cargados:', productos)
}

// routes

app.use('/products', (req, res) => {
  res.send(productos)
  console.log(productos)
}) +
  app.get('/productsRandom', (req, res) => {
    req.send(productRandom())
  })
init()
