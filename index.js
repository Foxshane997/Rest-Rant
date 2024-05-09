require('dotenv').config()
const express = require('express')
const app = express()
// Requirements & Definitions

// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Places route using the places.js file
app.use('/places', require('./controllers/places'))

// Home page
app.get('/', (req, res) => {
    res.render('home')
})

// 404 Page - Always last
app.get('*', (req, res) => {
    res.render('error404')
})

// Always Have this last.
app.listen(process.env.PORT)
