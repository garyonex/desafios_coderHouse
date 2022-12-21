import { Router } from 'express'
import {
  deleteProductCart,
  updateProductCart,
  addProductCart,
  getProductsCart
} from '../controllers/cart.controllers'

const cartRoutes = Router()
cartRoutes.get('/', getProductsCart)
cartRoutes.post('/', addProductCart)
cartRoutes.put('/:productId ', updateProductCart)
cartRoutes.delete('/', deleteProductCart)
export default cartRoutes
