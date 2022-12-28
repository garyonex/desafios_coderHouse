import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './styles.modules.scss'
const Products = () => {
  // desde el cart context viene de prueba este otro metodo a ver si al momento de renderizar los productos no se actualiza la pagina

  const { addItem, products } = useContext(CartContext)
  return (
    <div className="productsContainer">
      {products &&
        products.map((product, i) => (
          <div key={i} className="productsList">
            <div className="products_card">
              <div className="card_headers">
                {`${product.name} - ${product.categories}`}
              </div>
              <img src={product.img} alt={product.name} />
              <div className='products_card-description'>
                <p>
                  {`Precio: $ ${prod.price} \n 
                    Stock: ${prod.Stock}`}
                </p>
                <h3>{product.description}</h3>
              </div>
              {!product.inCart ? (
                <div className="card-btn">
                  <button onClick={() => addItem(product)}> Add to Cart</button>
                </div>
              ) : (
                <button>En el Carrito</button>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Products
