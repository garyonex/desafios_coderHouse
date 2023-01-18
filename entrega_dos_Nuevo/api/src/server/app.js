import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cartRoutes from '../routes/cart.routes'
import productRoutes from '../routes/product.routes'
import { handleErrors } from '../middleware/handleErrors'
import loginRoutes from '../routes/loginRegister.routes'
import userRoutes from '../routes/user.routes'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import configConnectionsMongo from '../database/mongoose/configConnectionsMongo'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
app.use(cookieParser())

// Configuracion session / cookie
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: configConnectionsMongo.mongodbUrl
      // indicamos almacenamiento externo
    }),
    secret: 'secret',
    cookie: { maxAge: 600000 },
    resave: false,
    rolling: true,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())

// TODO Routes
app.use('/api/product-cart', cartRoutes)
app.use('/api/products', productRoutes)
app.use('/login', loginRoutes)
app.use('/api/register', userRoutes)
app.use(handleErrors)
export default app
