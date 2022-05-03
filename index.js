import express from "express"
const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.json({ root: "this is root" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})