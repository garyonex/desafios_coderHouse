import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './styles.modules.scss?inline'
const Products = () => {
  const { addItem, products } = useContext(CartContext)
  return (
    <div className='productsContainer'>
      {products &&
        products.map((product, i) => {
          ;<div key={i}>
            <img src={product.img} alt={product.name} />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItem(product)}> Add to Cart</button>
            ) : (
              <button>En el Carrito</button>
            )}
          </div>
        })}
    </div>
  )
}

export default Products
