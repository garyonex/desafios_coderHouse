import { Router } from 'express'
import { deleteProductCart } from '../controllers/cart.controllers'
import { updateProductCart } from '../controllers/cart.controllers'
import { addProductCart } from '../controllers/cart.controllers'
import { getProductsCart } from '../controllers/cart.controllers'

const cartRoutes = Router()
cartRoutes.get('/', getProductsCart)
cartRoutes.post('/', addProductCart)
cartRoutes.put('/', updateProductCart)
cartRoutes.delete('/', deleteProductCart)
export default cartRoutes