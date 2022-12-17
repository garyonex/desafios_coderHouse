import { model, Schema } from 'mongoose'

const ProductSchema = Schema({
  name: {
    type: String,
    requred: true,
    unique: true
  },
  img: {
    type: String,
    required: true
  },
  inCart: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    required: true
  }
})
export default model('Product', ProductSchema)
