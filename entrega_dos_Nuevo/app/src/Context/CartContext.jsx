import { useEffect, useState, createContext } from 'react'
import {
  addItemtoCart,
  editItemToCart,
  getItemCart,
} from '../services/cart/controllerCart'
import { getAllProduct } from '../services/products/controlleProductos'
const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  //! todos los productos
  const getProducts = () => {
    getAllProduct() //? todos los productos
      .then((product) => {
        setProducts(product)
      })
      .catch(err => console.log(err))
  }
  //! productos que se encuentra en el carro
  const getProductCart = async () => {
    await getItemCart()
      .then((productsInCart) => {
        setCartItems(productsInCart)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 2000)
  }, [])
  const addItem = async (newProductToCart) => {

  }
  try {
    await addItemtoCart({ ...newProductToCart })
  } catch (error) {
    console.log(`aqui el error ${error}`)
  }

  getProducts()
  getProductCart()
}

const editCart = (id, query, amount) => {
  editItemToCart(id, query, amount).then(({ data }) => console.log(data))
  getProductCart()
  getProducts()
}
return (
  <CartContext.Provider value={{ cartItems, products, addItem, editCart }}>
    {children}
  </CartContext.Provider>
)
}

export default CartContext
