import { Router } from 'express'
import {
  deleteProductCart,
  updateProductCart,
  addProductCart,
  getProductsCart
} from '../controllers/cart.controllers'
import { authToken } from '../middleware/authToken'

const cartRoutes = Router()
cartRoutes.get('/', authToken, getProductsCart)
cartRoutes.post('/', authToken, addProductCart)
cartRoutes.put('/:productId ', authToken, updateProductCart)
cartRoutes.delete('/', authToken, deleteProductCart)
export default cartRoutes
