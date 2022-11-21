import { Router } from 'express'
import {
  init,
  leer,
  newProducto,
  productosTotal,
} from '../controllers/productosControllers'

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
export default productRoutes
