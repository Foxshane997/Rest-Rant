// The controller area
const router = require ("express").Router()
const places = require('../models/places.js')


router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/emy-XoByiBymX20-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/andriyko-podilnyk-RCfi7vgJjUY-unsplash (1).jpg'
      }]      
    res.render('places/index.jsx', {places})
    // This might be causing the issue
  })

  // POST /places
// POST /places
router.post('/', (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places'); // Redirect to the route that renders the updated list
});

module.exports = router