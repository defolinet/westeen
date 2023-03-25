const express = require('express')
const app = express()
const PORT = 3001
const {benchmakers} = require('./models/benchmarks/benchmakers')

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/benchmakers', (req, res) => {
    res.send()
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})