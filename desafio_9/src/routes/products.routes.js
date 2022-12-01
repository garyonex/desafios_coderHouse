import { Router } from 'express'
import Contenedor from '../container/Contenedor'
// import {
//   init,
//   leer,
//   newProducto,
//   productosTotal,
// } from '../controllers/productosControllers'
// const container = new Contenedor()
// const file = './products.json'
// const todos = './products.json'
import KnexContenedor from '../container/KnexContenedor'
import { options } from '../database/configDB'
const productosApi = new KnexContenedor(options.mariaDB, 'productos')
const productRoutes = Router()
productRoutes.get('/', async (req, res) => {
  // const productos = productosTotal()

  res.render('./listProduct', { product: await productosApi.findAll() })
})
productRoutes.post('/', async (req, res) => {
  const { body } = req
  await productosApi.create(body)
  res.render('./addProducts')
})
productRoutes.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await productosApi.findById(id)
  res.json(result)
})
productRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const result = await productosApi.deleteById(id)
  res.json({ message: result })
})
productRoutes.delete('/', async (req, res) => {
  const result = await productosApi.deleteAll()
  res.json({ message: result })
})
export default productRoutes
