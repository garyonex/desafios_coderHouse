import { useEffect, useState } from 'react'
import { getAllProduct } from '../services/products/controlleProductos'

export const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProduct().then((inicialProducts) => {
      setProducts(inicialProducts)
    })
  }, [])

  const addProducts = (productObject) => {
    createProducts(productObject).then((returnedProduct) => {
      setProducts(products.concat(returnedProduct))
    })
  }
  return { products, addProducts }
}
