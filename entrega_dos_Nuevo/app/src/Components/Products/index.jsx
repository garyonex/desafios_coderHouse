<<<<<<< HEAD
import { useContext, useEffect } from 'react'
=======
import { useContext, useEffect, useState } from 'react'
>>>>>>> 32f3fe93a11a2d28c7c5cc3a1845fe57886931a7
import CartContext from '../../Context/CartContext'
import Loading from '../../helpers/Loading'
import { getAllProduct } from '../../services/products/controlleProductos'
import Item from '../Item'
import './styles.modules.scss'
const Products = () => {
<<<<<<< HEAD
  // desde el cart context viene de prueba este otro metodo a ver si al momento de renderizar los productos no se actualiza la pagina

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
=======
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
>>>>>>> 32f3fe93a11a2d28c7c5cc3a1845fe57886931a7
  return (
<<<<<<< HEAD
    <div>
      <h1>PRODUCTOS</h1>
      {loading ? <Loading /> : ''}
      <div>
        {products && products.map((item) => <Item key={item.id} {...item} />)}
        <div className="card-btn">
          <button onClick={() => addItem(product)}> Add to Cart</button>
        </div>
      </div>
=======
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
>>>>>>> 32f3fe93a11a2d28c7c5cc3a1845fe57886931a7
    </div>
  )
}

export default Products
