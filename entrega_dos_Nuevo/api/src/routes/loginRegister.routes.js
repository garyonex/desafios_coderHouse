import { Router } from 'express'
import { recoverUserPass } from '../controllers/loginUsers'

const loginRoutes = Router()
loginRoutes.post('/', recoverUserPass)
export default loginRoutes
