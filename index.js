import express from "express"
import 'dotenv/config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3030
connectMongoDB().catch(err => console.log(err));

async function connectMongoDB() {
    await mongoose.connect(process.env.MONGODB_URI_DEV, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.json({ root: "this is root" })
})

import User from "./models/user.js"

app.get('/mongo', async (req, res) => {
    const query = await User.findOne({})
    res.json(query)
})

app.post('/body', (req, res) => {
    res.json(req.body);
});

import auth from './router/auth.js'
app.use('/auth', auth)