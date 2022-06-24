import mongoose from 'mongoose'

const packageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { versionKey: false }
)

const Package =
  mongoose.models.Package || mongoose.model('Package', packageSchema)

export default Package
