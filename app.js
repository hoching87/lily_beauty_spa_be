import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }))

// CORS
app.use(cors())

// ROUTER
// Authentication
import auth from './router/auth.js'
app.use('/auth', auth)

// Staff Authentication
import staff from './router/staff.js'
app.use('/staff', staff)

app.get('/', (req, res) => {
  res.json({ root: 'this is root' })
})

import jwtParser from './middleware/jwtParser.js'
app.get('/jwt/:id', jwtParser, async (req, res) => {
  const user = req.user // get username from req.user property created by isLoggedIn middleware
  const _id = req.params.id // get id from params
  //send target todo
  res.json({
    user: user
  })
})

export default app
