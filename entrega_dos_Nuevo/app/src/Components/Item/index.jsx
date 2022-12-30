import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.modules.scss'
const Item = ({ ...item }) => {
  const addItem = (amount) => {
    console.log(amount)
  }
  return (
    <div className='productsContainer'>
      <div className='productsList'>
        <div className='products_card' key={item._id}>
          <div className='card_headers'>{`${item.name}-${item.categories}`}</div>
          <img src={item.img} alt={item.name} />
          <div className='products_card-description'>
            <p>
              {`Price: ${item.price} \n
                Stock: ${item.stock}`}
            </p>
          </div>
          <div className='card_footer'>
            <Link to={`/products/${item._id}`}>
              <button>Details product</button>
            </Link>
          </div>
          <div className='card-btn'>
            <button>AGREGAR</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
