import { createContext, useContex, useState } from 'react'

export const useCartContext = () => useCartContext(CartContex)

export const CartContex = createContext([])

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  const aggToCart = (obj) => {
    const existInCart = cartList.find((itemInCart) => itemInCart.id === obj.id)
    if (existInCart) {
      setCartList(
        cartList.map((itemInCart) => {
          if (itemInCart.id === obj.id) {
            return {
              ...existInCart,
              amount: existInCart.amount + obj.amount
            }
          } else return itemInCart
        })
      )
    } else setCartList([...cartList, { ...obj, amount: 1 }])
  }
  const inCart = (id) => {
    return cartList.some((obj) => obj.id === id)
  }
  const emplyCart = () => {
    setCartList([])
  }
  const deleteOne = (id) => {
    return setCartList(cartList.filter((item) => item.id !== id))
  }
  const allsItems = () => {
    return cartList.reduce((acc, prod) => acc + -prod.amount, 0)
  }

  return (
    <CartContex.provider
      value={{
        cartList,
        aggToCart,
        emplyCart,
        inCart,
        deleteOne,
        allsItems
      }}
    >
      {children}
    </CartContex.provider>
  )
}
