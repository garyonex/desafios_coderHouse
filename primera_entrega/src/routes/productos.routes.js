import { Router } from 'express'
import {
  buscarId,
  eliminarId,
  eliminarTodo,
  modificarId,
  saveProductos,
} from '../controllers/productosControllers'

const productosRoutes = Router()
productosRoutes.post('/', saveProductos)
productosRoutes.get('/:id', buscarId)
productosRoutes.delete('/:id', eliminarId)
productosRoutes.delete('/', eliminarTodo)
productosRoutes.put('/:id', modificarId)
export default productosRoutes
