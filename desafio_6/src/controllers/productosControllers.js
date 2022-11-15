import Contenedor from '../Contenedor.js'
let productos = null
const container = new Contenedor()
const file = './products.json'

export const productosTotal = () => {
  const todos = container.read(file)
  return todos
}

export const init = () => {
  console.log('iniciando ...')
  productos = productosTotal()
  console.log('Productos Cargados', productos)
}

export const leer = (file) => {
  const result = container.getAll(file)
  return result
}

export const newProducto = (producto, file) => {
  const result = container.save(producto, file)
  return result
}
