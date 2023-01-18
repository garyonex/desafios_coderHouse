import { Router } from 'express'
import { logout, recoverUserPass } from '../controllers/loginUsers'

const loginRoutes = Router()
loginRoutes.post('/', recoverUserPass)
loginRoutes.post('/logout', logout)
export default loginRoutes
