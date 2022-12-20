import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import styles from './styles.modules.scss'

const Products = () => {
  const { addItem, products } = useContext(CartContext)
  return (
    <div className={styles.productsContainer}>
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
