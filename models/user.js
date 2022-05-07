import mongoose from 'mongoose'
import { compare } from 'bcrypt'

const userSchema = new mongoose.Schema(
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

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
