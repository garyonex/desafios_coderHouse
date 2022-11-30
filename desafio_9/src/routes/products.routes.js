import { Router } from 'express'
import Contenedor from '../container/Contenedor'
import {
  init,
  leer,
  newProducto,
  productosTotal,
} from '../controllers/productosControllers'
const container = new Contenedor()
const file = './products.json'
const productRoutes = Router()
const todos = './products.json'
productRoutes.get('/', (req, res) => {
  const productos = productosTotal()
  console.log(todos)
  console.log(productos)
  res.status(200).render('./productsCard', { product: productos })
})
productRoutes.post('/', (req, res) => {
  const { body } = req
  newProducto(body, todos)
  console.log(body)
  const result = leer(todos)
  res.render('./addProducts')
})
productRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const numId = Number(id)
  const result = await container.deleteById(numId, file)
  res.json({ message: result })
})
export default productRoutes
