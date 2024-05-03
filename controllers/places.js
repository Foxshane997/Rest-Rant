// The controller area
const router = require ("express").Router()

// The places route
router.get('/', (req, res) => {
    res.send('GET /places' + ' - This is the places/controller folder & file')
})

module.exports = router