import { createContext } from 'react'
import { useEffect, useState } from 'react'
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

  // Falta colocar la conexion con el back con axios
  // para que pueda hacer las peticiones correctamente

  // Cada vez que se actualize el carrito seteamos el localStorage

  //! todos los productos
  const getProducts = async () => {
    try {
      await getAllProduct() //? todos los productos
        .then((product) => {
          setProducts(product)
        })
    } catch (error) {
      console.log(error)
    }
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
  const addItem = (newProductToCart) => {
    const { name, img, price } = newProductToCart
    addItemtoCart({name, img, price})
    getProducts()
    getProductCart()
    // TODO chequear esto
    // addItemtoCart({name, img, price}).then((returnedProduc) => {
    //   setCartItems(cartItems.concat(returnedProduc))
    // })
    
  }
  console.log(`viene de Context ${addItem}`);
  const editCart = (id, query, amount) => {
    editItemToCart(id, query, amount)
    getProductCart()
    getProducts()
  }
  return (
    <CartContext.Provider
      value={{ cartItems, products, addItem, editCart, getProducts }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
