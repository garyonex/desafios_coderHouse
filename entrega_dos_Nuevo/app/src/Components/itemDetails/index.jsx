import { useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import './styles.modules.scss'

const ItemsDetails = () => {
  const { products } = useProducts()
  const { productId } = useParams()
  const item = products.find((produc) => produc._id === productId)
  if (!item) return null

  return (
    <div>
      <h3>{item.name}</h3>
      <div className='containerImg'>
        <img src={item.img} alt={item.name} />
      </div>
      <p>{item.description}</p>
      <small>{item.price}</small>
    </div>
  )
}

export default ItemsDetails
