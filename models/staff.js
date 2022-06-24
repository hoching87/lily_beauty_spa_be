import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
)

const Staff = mongoose.models.Staff || mongoose.model('Staff', staffSchema)

export default Staff
