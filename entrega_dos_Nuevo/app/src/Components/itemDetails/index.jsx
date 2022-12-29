import { useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import './styles.modules.scss'

const ItemsDetails = () => {
  const { products } = useProducts()
  const { productsId } = useParams()
  const item = products.find((produc) => item.id === productsId)
  if (!item) return null

  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.img} alt={item.name} />
      <p>{item.description}</p>
      <small>{item.price}</small>
    </div>
  )
}

export default ItemsDetails
