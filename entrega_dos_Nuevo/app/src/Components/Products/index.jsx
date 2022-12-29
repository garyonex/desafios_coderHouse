import { useContext, useEffect, useState } from 'react'
import CartContext from '../../Context/CartContext'
import Loading from '../../helpers/Loading'
import { getAllProduct } from '../../services/products/controlleProductos'
import Item from '../Item'
import './styles.modules.scss'
const Products = () => {
  const { addItem } = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  //Todo llamada a la api
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      getAllProduct() // viene desde el controllers
        .then((prod) => {
          setProducts(prod)
          setLoading(false)
        })
    }, 2000)
  }, [])
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
