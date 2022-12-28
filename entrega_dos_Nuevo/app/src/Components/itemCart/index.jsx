import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './styles.modules.scss'
const ItemCart = ({ item }) => {
  const { editCart } = useContext(CartContext)
  const { amount } = item
  return (
    <div className='cartItem'>
      <img src={item.img} alt={item.name} />
      <div className='dataContainer'>
        <div className='left'>
          <p>{item.name}</p>
          <div className='buttons'>
            <button onClick={() => editCart(item._id, 'add', amount)}>
              AGREGAR
            </button>
            <button onClick={() => editCart(item._id, 'del', amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className='rigth'>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price} </p>
        </div>
      </div>
    </div>
  )
}

export default ItemCart
