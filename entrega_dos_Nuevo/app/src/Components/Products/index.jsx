import styles from './styles.modules.scss'

const Products = () => {
  const { addItemToCart, products } = useContext(CartContext)
  return (
    <div className={StyleSheet.productsContainer}>
      {products &&
        products.map((product, i) => {
          ;<div key={i}>
            <img src={product.img} alt={product.name} />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            <button onClick={() => addItemToCart(product)}> Add to Cart</button>
          </div>
        })}
    </div>
  )
}

export default Products
