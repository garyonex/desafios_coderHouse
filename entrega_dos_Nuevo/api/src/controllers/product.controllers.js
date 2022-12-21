import Products from '../models/Products'
export const createProduct = async (req, res) => {
  const { body } = req
  const { name, description, categories, available, img, price } = body
  const newProduct = await Products({
    name,
    description,
    categories,
    available,
    img,
    price
  })
  try {
    const savedProduct = newProduct.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    console.log(error)
  }
}

export const searchProducts = async (req, res) => {
  const { latest, categories, available } = req.query
  try {
    let product
    if (latest) {
      product = await Products.find().sort({ createAt: -1 }.limit(1))
    } else if (categories) {
      product = await Products.find({
        categories: {
          $in: [categories]
        }
      })
    } else if (available) {
      product = await Products.find({
        available: {
          $in: [available]
        }
      })
    } else {
      product = await Products.find()
    }
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
  }
}

export const searchById = async (req, res) => {
  const { id } = req.params
  const product = await Products.findById(id)
  try {
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(400).json('It was not found')
    }
  } catch (error) {
    console.log(error)
  }
}

export const removeById = async (req, res) => {
  const { id } = req.params
  await Products.findByIdAndRemove(id)
  try {
    res.status(204).json('Product has ben deleted')
  } catch (error) {
    console.log(error)
  }
}

export const updateById = async (req, res) => {
  const { id } = req.params
  const product = req.body
  const changeProduct = {
    product
  }
  try {
    const result = await Products.findByIdAndUpdate(id, changeProduct, {
      new: true
    })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}
