import { useContext, useState, useEffect } from 'react'
import CartContext from '../../Context/CartContext'
import './styles.modules.scss'

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [productsLength, setProductsLength] = useState(0)
  const { cartItems } = useContext(CartContext)

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    )
  }, [cartItems])

  const totalPriceCart = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  )
  return (
    <div className="cartContainer">
      <div
        onClick={() => {
          setCartOpen(!cartOpen)
        }}
        className="buttonCartContainer"
      >
        <div className="buttonCart">
          {!cartOpen ? (
            <img
              src="https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-10/33/cart_2-2-64.png"
              alt=""
            />
          ) : (
            <img
              src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_shopping_cart_48px-64.png"
              alt=""
            />
          )}
        </div>
        {!cartOpen && 
        (<div className="productNumber">{productsLength}</div>)
        }
      </div>
      {cartItems && cartOpen && (
        <div className="cart">
          <h2>Tu carrito</h2>
          {cartItems.length === 0 ? (
            <p className="cartVacio">Tu carrito esta vacio</p>
          ) : (
            <div>
              {cartItems.map((item, i) => (
                <ItemCart key={i} item={item} />
              ))}
              <h2 className="cartTotal">Total : ${totalPriceCart}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Cart
