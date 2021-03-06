const express = require('express')
const app = express()
const morgan = require('morgan')
const paymentData = require('./sample.json')
const port = 8000;

app.use(express.json())
app.use(morgan('dev'))

app.get('/api', (req, res) => {
    res.status(200).send(paymentData)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

