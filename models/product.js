import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

})

export default mongoose.model('Product', productSchema);
