import { Schema, model } from 'mongoose'
const CartSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // asociamos el cart con los usuarios
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
{
  versionKey: false,
  timestamps: true
})

export default model('Cart', CartSchema)
