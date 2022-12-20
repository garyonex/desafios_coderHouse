import { Router } from 'express'
import { createProduct } from '../controllers/product.controllers'

const productRoutes = Router()
productRoutes.post('/', createProduct)
export default productRoutes