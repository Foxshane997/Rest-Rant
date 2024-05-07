// The controller area
const router = require ("express").Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/public/images/emy-XoByiBymX20-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/public/images/andriyko-podilnyk-RCfi7vgJjUY-unsplash (1).jpg'
      }]      
    res.render('places/index', {places})
  })
  

module.exports = router