import axios from 'axios'
import { setToken } from '../products/controlleProductos'
const baseUrl = 'http://localhost:8080/api/product-cart'

export const getItemCart = () => {
  const request = axios.get(baseUrl)
  return request.then((res) => res.data)
}

// Chequar si se necesitan token para poder agregar producto al carrito
export const addItemtoCart = (newProductToCart) => {
  const config = {
    headers: {
      Authorization: setToken
    }
  }
  const request = axios.post(baseUrl, newProductToCart, config)
  return request.then((res) => res.data)
}

// igual aca
export const editItemToCart = async (id, query, amount) => {
  const config = {
    headers: {
      Authorization: setToken
    }
  }
  if (query === 'del' && amount === 1) {
    const request = axios.delete(`${baseUrl} / ${id}`)
    const result = request.then((res) => res.data)
    console.log(result)
    // return result
  } else {
    const request = axios.put(
      `${baseUrl} / ${id} ?query=${query}`,
      { amount },
      config
    )
    const result = request.then((res) => res.data)
    console.log(result)
  }
}
