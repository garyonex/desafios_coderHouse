import { createContext } from 'react'
import { useEffect, useState } from 'react'
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

  // Falta colocar la conexion con el back con axios
  // para que pueda hacer las peticiones correctamente

  // Cada vez que se actualize el carrito seteamos el localStorage

  //! todos los productos
  const getProducts = () => {
    getAllProduct() //? todos los productos
      .then((product) => {
        setProducts(product)
      })
  }
  //! productos que se encuentra en el carro
  const getProductCart = () => {
    getItemCart(newObjectToCart).then((productsInCart) => {
      setCartItems(productsInCart)
    })
  }
  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 2000)
    setProducts()
  }, [])
  const addItem = (newProductToCart) => {
    const { name, img, price } = newProductToCart
    addItemtoCart(name, img, price)
    getProducts()
    getProductCart()
  }

  const editCart = (id, query, amount) => {
    editItemToCart(id, query, amount)
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