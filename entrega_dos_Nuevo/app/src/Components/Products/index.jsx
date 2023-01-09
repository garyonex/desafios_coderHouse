import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import Loading from '../../helpers/Loading'
import { useLoading } from '../../hooks/useLoading'
import { useProducts } from '../../hooks/useProducts'
import { useUser } from '../../hooks/useUser'
import Item from '../Item'
import './styles.modules.scss'
const Products = () => {
  const { addItem } = useContext(CartContext)
  const { products } = useProducts()
  const { loading } = useLoading()
  const { user } = useUser()
  const token = user.token
  return (
    <div className='productsTotals'>
      {loading ? <Loading /> : ''}
      {products &&
        products.map((item) => (
          <div key={item._id}>
            <Item key={item._id} {...item} />
            {!item.inCart ? (
              <div className='card-btn'>
                <button onClick={() => addItem(item, token)}> Add to Cart</button>
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
