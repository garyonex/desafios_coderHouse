import { useContext, useEffect } from 'react'
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
    <div>
      <h1>PRODUCTOS</h1>
      {loading ? <Loading /> : ''}
      <div>
        {products &&
          products.map((item) => (
            <div>
              <Item key={item.id} {...item} />
              {!item.inCart ? (
                <div className="card-btn">
                  <button onClick={() => addItem(product)}> Add to Cart</button>
                </div>
              ) : (
                <button>EN EL CARRITO</button>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Products
