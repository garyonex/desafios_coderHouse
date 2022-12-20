import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/products' //? para produccion
// const baseUrl = '/api/productos' //? para desarrollo

export const createNewProduct = async (newObject) => {
  const request = await axios.post(baseUrl, newObject)
  return request.then((res) => res.data)
}

export const getAllProduct = async () => {
  const request = await axios.get(baseUrl)
  return request.then((res) => res.data)
}
