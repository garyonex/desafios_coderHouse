import Carts from '../models/Carts'
import Products from '../models/Products'

export const getProductsCart = async (req, res) => {
  const result = await Carts.find()
  if (result) {
    res.json({ result })
  } else {
    res.json({ message: 'Nada por aqui' })
  }
}

export const addProductCart = async (req, res) => {
  const { body } = req
  const { name, img, price } = body
  const inProduct = await Products.findOne({ name })
  const notEmply = name !== '' && img !== '' && price !== ''
  const inCart = await Carts.findOne({ name })

  // Esta el producto?
  if (!inProduct) {
    res
      .stauts(400)
      .json({ message: 'Este producto no esta en la base de datos' })
  } else if (notEmply && !inCart) {
    const newProductInCart = new Carts({ name, img, price, amount: 1 })

    try {
      // actualizamos
      await Products.findByIdAndUpdate(
        inProduct?._id,
        { inCart: true, name, img, price },
        { new: true }
      )
      const result = newProductInCart.save()
      res.json({ message: 'Producto agregado correctament', result })
    } catch (error) {
      console.log(error)
    }
  } else if (inCart) {
    res.status(400).json({
      message: 'Producto ya se encuentra en el carrito'
    })
  }
}

export const updateProductCart = async (req, res) => {
  const { productId } = req.params
  const { query } = req.query
  const { body } = req

  const findProduct = await Carts.findById(productId)
  if (!query) {
    res.status(400).json({ message: 'Debes enviar una query' })
  } else if (findProduct && query === 'add') {
    body.amount = body.amount + 1

    await Carts.findByIdAndUpdate(productId, body, {
      new: true
    })
    try {
      const product = await Carts.findById(productId)
      res.json({
        message: `Producto ${product.name} actualizado`,
        product
      })
    } catch (error) {
      console.log(error)
    }
  } else if (findProduct && query === 'del') {
    body.amount = body.amount - 1
    try {
      const product = await Carts.findByIdAndUpdate(productId, body, {
        new: true
      })
      res.status(201).json({
        message: `Producto ${product.name} actualizado`,
        product
      })
    } catch (error) {
      console.log(`error al eliminar producto ${error}`)
    }
  } else {
    res.status(400).json({
      message: 'Hay un error del tamaño del cielo'
    })
  }
}

export const deleteProductCart = async (req, res) => {
  const { productId } = req.params
  const productInCart = await Carts.findById(productId)

  const { name, img, price, _id } = await Products.findOne({
    name: productInCart.name
  })
  try {
    await Carts.findByIdAndDelete(productId)
    const modifyProductsCart = Products.findByIdAndUpdate(
      _id,
      { inCart: false, name, img, price },
      { new: true }
    )
    res.status(204).json({
      message: `Producto ${modifyProductsCart.name} fue eliminado con exito`
    })
  } catch (error) {
    console.log(`Error al eliminar producto ${error}`)
  }
}
