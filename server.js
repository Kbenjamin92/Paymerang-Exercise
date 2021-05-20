const express = require('express')
const app = express()
const morgan = require('morgan')
const paymentData = require('./sample.json')
const port = 9000;

app.use(express.json())
app.use(morgan('dev'))


app.get('/paymentData', (req, res) => {
    res.send(paymentData)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})