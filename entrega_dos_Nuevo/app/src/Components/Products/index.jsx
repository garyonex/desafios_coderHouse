import { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'
import Loading from '../../helpers/Loading'
import { useProducts } from '../../hooks/useProducts'
import { getAllProduct } from '../../services/products/controlleProductos'
import Item from '../Item'
import './styles.modules.scss'
const Products = () => {
  const { addItem } = useContext(CartContext)
  const { products } = useProducts()
  const [loading, setLoading] = useState(false)
  return (
    <div className='productsTotals'>
      {loading ? <Loading /> : ''}
      {products &&
        products.map((item) => (
          <div key={item._id}>
            <Item key={item._id} {...item} />
            {!item.inCart ? (
              <div className='card-btn'>
                <button onClick={() => addItem(item)}> Add to Cart</button>
              </div>
            ) : (
              <button>EN EL CARRITO</button>
            )}
          </div>
        ))}
    </div>
  )
}

export default Products
