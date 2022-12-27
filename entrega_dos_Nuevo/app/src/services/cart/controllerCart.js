import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/product-cart'

export const getItemCart = (newObject) => {
  const request = axios.get(baseUrl, newObject)
  return request.then((res) => res.data)
}

// Chequar si se necesitan token para poder agregar producto al carrito
export const addItemtoCart = async (newProductToCart) => {
  // const config = {
  //   headers : {
  //     Authorization: token
  //   }
  // }
  const request = await axios.post(baseUrl, newProductToCart)
  return request.then((res) => res.data)
}

// igual aca
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
