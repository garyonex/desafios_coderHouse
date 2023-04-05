import { Schema, model } from 'mongoose'
// Items en el cart
const cartItem = Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number
})
export default model('CartItem', cartItem)