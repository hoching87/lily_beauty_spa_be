import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { versionKey: false }
)

const Service =
  mongoose.models.Service || mongoose.model('Service', serviceSchema)

export default Service
