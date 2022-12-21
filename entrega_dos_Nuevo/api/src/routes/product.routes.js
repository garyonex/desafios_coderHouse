import { Router } from 'express'
import {
  createProduct,
  removeById,
  searchById,
  searchProducts,
  updateById
} from '../controllers/product.controllers'

const productRoutes = Router()
productRoutes.post('/', createProduct)
productRoutes.get('/', searchProducts)
productRoutes.get('/:id', searchById)
productRoutes.delete('/:id', removeById)
productRoutes.put('/:id', updateById)
export default productRoutes
