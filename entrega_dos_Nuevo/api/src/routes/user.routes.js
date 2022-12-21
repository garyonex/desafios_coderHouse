import { Router } from 'express'
import { checkUser, createUsaer } from '../controllers/user.controllers'

const userRoutes = Router()
userRoutes.post('/', createUsaer)
userRoutes.get('/allsUsers', checkUser)

export default userRoutes
