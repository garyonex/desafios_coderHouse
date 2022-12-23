import { memo } from 'react'
import Item from '../Item'

const ItemList = memo(({ newObject }) => {
  return (
    <div>
      {newObject.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  )
})

export default ItemList
