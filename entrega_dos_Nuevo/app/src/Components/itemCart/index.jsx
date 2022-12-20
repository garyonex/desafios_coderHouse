import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import styles from './styles.modules.scss'
const ItemCart = (item) => {
  const { editCart } = useContext(CartContext)
  const { amount } = item
  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => editCart(item._id, 'add', amount)}>
              AGREGAR
            </button>
            <button onClick={() => editCart(item._id, 'del', amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className={styles.rigth}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price} </p>
        </div>
      </div>
    </div>
  )
}

export default ItemCart
