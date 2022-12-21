import { Router } from 'express'
import {
  createProduct,
  removeById,
  searchById,
  searchProducts,
  updateById
} from '../controllers/product.controllers'
import { authToken } from '../middleware/authToken'
import authUserAdmin from '../middleware/authUserAdmin'

const productRoutes = Router()
productRoutes.post('/', authToken, authUserAdmin, createProduct)
productRoutes.get('/', searchProducts)
productRoutes.get('/:id', searchById)
productRoutes.delete('/:id', authToken, authUserAdmin, removeById)
productRoutes.put('/:id', authToken, authUserAdmin, updateById)
export default productRoutes
