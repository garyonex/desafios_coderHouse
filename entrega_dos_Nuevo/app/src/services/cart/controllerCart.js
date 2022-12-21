import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/product-cart'

export const getItemCart = async (newObject) => {
  const request = await axios.get(baseUrl, newObject)
  return request.then((res) => res.data)
}

export const addItemtoCart = async (newProductToCart) => {
  const request = await axios.post(baseUrl, newProductToCart)
  return request.then((res) => res.data)
}

export const editItemToCart = async (id, query, amount) => {
  if (query === 'del' && amount === 1) {
    const request = axios.delete(`${baseUrl} / ${id}`)
    const result = request.then((res) => res.data)
    console.log(result)
    // return result
  } else {
    const request = axios.put(`${baseUrl} / ${id} ?query=${query}`, { amount })
    const result = request.then((res) => res.data)
    console.log(result)
  }
}
