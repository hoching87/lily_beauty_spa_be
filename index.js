import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT
const mongoURL =
  process.env.mode == 'production'
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_DEV

// Listen to port
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }))

// Connect to MongoDB
connectMongoDB().catch((err) => console.log(err))
async function connectMongoDB() {
  console.log('mongoURL', mongoURL)
  await mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
}

// Authentication router
import auth from './router/auth.js'
app.use('/auth', auth)

app.get('/', (req, res) => {
  res.json({ root: 'this is root' })
})

import jwtParser from './router/jwtParser.js'
app.get('/jwt/:id', jwtParser, async (req, res) => {
  const user = req.user // get username from req.user property created by isLoggedIn middleware
  const _id = req.params.id // get id from params
  //send target todo
  res.json({
    user: user
  })
})
