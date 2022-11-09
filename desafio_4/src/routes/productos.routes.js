import { Router } from 'express'
import {
  init,
  leer,
  newProducto,
  productosTotal,
} from '../controllers/productosControllers.js'
const todos = './products.json'
const productRoutes = Router()
productRoutes.get('/', (req, res) => {
  const productos = productosTotal()
  console.log(productos)
  res.render('index.ejs', { productos })
})
productRoutes.post('/', (req, res) => {
  const { body } = req

  newProducto(body, todos)

  console.log(body)

  const result = leer(todos)
  res.render('productos.ejs')
})
init()
export default productRoutes
