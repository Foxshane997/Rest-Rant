// The controller area
const router = require ("express").Router()
const places = require('../models/places.js')

// Index Route
router.get('/', (req, res) => {
  res.render('places/index', {places})
})

// Didn't say where to put this in the instructions.
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('/show', { place: places[id] })
  }
})

// New Route
router.get('/new', (req, res) => {
  res.render('places/new')
})

// POST /places
router.post('/', (req, res) => {
  // console.log(req.body);
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
  console.log(places)
  res.redirect('/places'); // Redirect to the route that renders the updated list
});

module.exports = router