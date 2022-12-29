import { useState } from 'react'
<<<<<<< HEAD
import 'styles.modules.scss'
const Item = ({ item }) => {
  const addItem = (amount) => {
    console.log(amount)
=======
import './styles.modules.scss'
const Item = ({ ...item }) => {
  const addItem = (amount) => {
    console.log(amount)
>>>>>>> 32f3fe93a11a2d28c7c5cc3a1845fe57886931a7
  }
  return (
<<<<<<< HEAD
    <div className="products_catd">
      <div className="card_headers">{`${item.name}-${item.categories}`}</div>
      <img src={item.img} alt={item.name} />
      <div className="products_card-description">
        <p>
          {`Price: ${item.price} \n
                Stock: ${item.stock}`}
        </p>
        <h3>{Item.description}</h3>
=======
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
            <h3>{item.description}</h3>
          </div>
          <div className='card_footer'>
            {/* aqui deberia ir un link que envie a los detalles del producto */}
            <button>Details product</button>
          </div>
          <div className='card-btn'>
            <button>AGREGAR</button>
          </div>
        </div>
>>>>>>> 32f3fe93a11a2d28c7c5cc3a1845fe57886931a7
      </div>
      <div className="card_footer">
        {/* aqui deberia ir un link que envie a los detalles del producto */}
        <button>Details product</button>
      </div>
      <div className="card-btn">
        <button>AGREGAR</button>
      </div>
    </div>
  )
}

export default Item
