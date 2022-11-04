import { Router } from 'express'
import {
  buscarUno,
  eliminarUno,
  init,
  leer,
  newProduct,
  productosTotal,
  productRandom,
} from '../controllers/productos.js'

const file = './products.txt'
const productRoutes = Router()
productRoutes.get('/', (req, res) => {
  res.send(productosTotal())
})
productRoutes.get('/random', (req, res) => {
  res.send(productRandom())
})

productRoutes.post('/', (req, res) => {
  const { body } = req
  newProduct(body, file)
  console.log(body)
  res.json(leer(file))
})
productRoutes.delete('/:id', (req, res) => {
  const id = req.params.id
  eliminarUno(id)
  const result = leer(file)
  res.status(204).json({ message: result })
})
productRoutes.get('/:id',(req, res) => {
  const { id } = req.params
  const result = buscarUno(id, file)
  res.json(result)
})
init()
export default productRoutes
