import { useEffect } from 'react'
import { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'
import styles from './styles.module.scss'

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [productsLength, setProductsLength] = useState(0)
  const { cartItems } = useContext(CartContext)

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    )
  }, [cartItems])

  const totalPriceCart = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  )
  return <div>
    <div>
      
        
    </div>
  </div>
}

export default Cart
