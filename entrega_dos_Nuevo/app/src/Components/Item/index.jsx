import { useState } from 'react'

const Item = ({ prod }) => {
  const addItem = (cant) => {
    console.log(cant)
  }
  return (
    <div key={prod.id} className="itemContaner_card">
      <div className="card">
        <div className="card_header">{`${prod.name}-${prod.categories}`}</div>
        <div className="card_body">
          <img src={prod.img} alt={prod.name} />
        </div>
        <div className="card_description">
          <p>
            {`Price: ${prod.price} \n
                Stock: ${prod.stock}`}
          </p>
        </div>
        <div className="card_footer">
          {/* aqui deberia ir un link que envie a los detalles del producto */}
          <button>Details product</button>
        </div>
        <div className="card_btnAdd">
          <button>AGREGAR</button>
        </div>
      </div>
    </div>
  )
}

export default Item
