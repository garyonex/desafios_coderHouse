import { useEffect, useState, createContext } from 'react'
import {
  addItemtoCart,
  editItemToCart,
  getItemCart
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
  }
  //! productos que se encuentra en el carro
  const getProductCart = (newObjectToCart) => {
    getItemCart(newObjectToCart).then((productsInCart) => {
      setCartItems(productsInCart)
    })
  }
  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 2000)
    getProductCart()
  }, [])
  const addItem = async (newProductToCart) => {
    const { name, img, price } = newProductToCart
    try {
      await addItemtoCart({ name, img, price })
    } catch (error) {
      console.log(`aqui el error ${error}`)
    }

    getProducts()
    getProductCart()
  }

  const editCart = (id, query, amount) => {
    editItemToCart(id, query, amount).then(({data}) => console.log(data))
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
