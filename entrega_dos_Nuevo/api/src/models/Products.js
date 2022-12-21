import { model, Schema } from 'mongoose'

const ProductSchema = Schema(
  {
    name: {
      type: String,
      requred: true,
      unique: true
    },
    description: {
      required: true,
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    available: {
      required: true,
      type: Boolean
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
  },
  { timestamps: true }
)
export default model('Product', ProductSchema)
