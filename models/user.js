import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
})

export default mongoose.model('User', userSchema);
