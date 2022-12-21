import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cartRoutes from '../routes/cart.routes'
import productRoutes from '../routes/product.routes'
import { handleErrors } from '../middleware/handleErrors'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

// TODO Routes
app.use('/api/product-cart', cartRoutes)
app.use('/api/products', productRoutes)
app.use(handleErrors)
export default app
