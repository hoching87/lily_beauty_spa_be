import app from './app.js'
import mongoose from 'mongoose'

const port = process.env.PORT
// Listen to port
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

// Connect to MongoDB
const mongoURL =
  process.env.mode == 'production'
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_DEV
connectMongoDB().catch((err) => console.log(err))
async function connectMongoDB() {
  console.log('mongoURL', mongoURL)
  await mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
}
