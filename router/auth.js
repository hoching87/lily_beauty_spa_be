import express from 'express'
const router = express.Router()
import User from '../models/user.js'
import { hashSync, compareSync } from 'bcrypt'
import jwt from 'jsonwebtoken'

router.post('/register', async (req, res) => {
  try {
    // hash the password
    req.body.password = await hashSync(req.body.password, 10)
    // create a new user
    const user = await User.create(req.body)
    // send new user as response
    res.json(user)
  } catch (error) {
    res.status(400).json({ error })
  }
})

router.post('/login', async (req, res) => {
  try {
    // check if the user exists
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      //check if password matches
      const result = await compareSync(req.body.password, user.password)
      if (result) {
        // sign token and send it in response
        const token = await jwt.sign({ email: user.email }, process.env.SECRET)
        res.json({ token })
      } else {
        res.status(400).json({ error: "password doesn't match" })
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" })
    }
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default router
