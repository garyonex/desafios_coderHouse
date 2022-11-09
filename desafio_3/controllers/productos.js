import Contenedor from '../../desafio_2/Contenedor.js'
let productos = null
const container = new Contenedor()
const file = './products.txt'
export const productosTotal = () => {

  const allProductArray = container.read(file)
  return allProductArray
}

export const productRandom = () => {
  const allProductArray = container.read(file)
  const randomIndex = Math.floor(Math.random() * allProductArray.length)
  return allProductArray[randomIndex]
}
export const init = () => {
  console.log('iniciando ...')
  productos = productosTotal()
  console.log('Productos Cargados:', productos)
}
export const newProduct = (producto, file) => {
  const result = container.save(producto, file)
  return result
}
export const leer = (file) => {
  const result = container.getAll(file)
  return result
}

export const eliminarUno = (id,file) => {
  
  const result = container.deleteById(id, file)
  return result
}

export const buscarUno = (id, file) => {
  const result = container.getById(id, file) 
  return result
}
