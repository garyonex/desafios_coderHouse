import { Router } from 'express'
import { checkUser, createUser } from '../controllers/user.controllers'

const userRoutes = Router()
userRoutes.post('/', createUser)
userRoutes.get('/allsUsers', checkUser)

export default userRoutes
