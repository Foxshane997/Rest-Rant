const { Router } = require("express")

const router = require ("express").Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = Router