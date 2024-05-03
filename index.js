require('dotenv').config()
const express = require('express')
const app = express()

// The app using the file places file in controllers folder
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// 404 Page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Always Have this last.
app.listen(process.env.PORT)
