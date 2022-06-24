import express from 'express'
const router = express.Router()
import Staff from '../models/staff.js'
import { hashSync, compareSync } from 'bcrypt'
import jwt from 'jsonwebtoken'

router.post('/register', async (req, res) => {
  try {
    // hash the password
    req.body.password = await hashSync(req.body.password, 10)
    // create a new user
    const staff = await Staff.create(req.body)
    // send new staff as response
    res.json(staff)
  } catch (error) {
    res.status(400).json({ error })
  }
})

router.post('/login', async (req, res) => {
  try {
    // check if the staff exists
    const staff = await Staff.findOne({ email: req.body.email })
    if (staff) {
      //check if password matches
      const result = await compareSync(req.body.password, staff.password)
      if (result) {
        // sign token and send it in response
        const token = await jwt.sign({ email: staff.email }, process.env.SECRET)
        res.json({ token })
      } else {
        res.status(400).json({ error: "password doesn't match" })
      }
    } else {
      res.status(400).json({ error: "staff doesn't exist" })
    }
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default router
