const router = require('express').Router()
const db = require('../models')
const places = require('../models/places')

// New Route
router.get('/new', (req, res) => {
  res.render('places/new')
  })

  // Index Route
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', {places})
    })
    .catch(err => {
      res.render('error404')
    })
})

// Post Places Route
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// Show Route
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// Create Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

// Places Get id Stub 
router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

// Places put id Stub
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// Delete Route
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// Edit Route
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// Rant Route
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// Delete Stub
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// Export
module.exports = router

// // The controller area
// const router = require ("express").Router()
// const places = require('../models/places.js')

// // Index Route
// router.get('/', (req, res) => {
//   res.render('places/index', {places})
// })

// // New Route
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// // Show Route 
// router.get("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) { res.render("error404");
//   } else if (!places[id]) { res.render("error404");
//   } else
//   { res.render("places/show", { place: places[id], id: id }); } });

//   // Put Route
//   router.put('/:id', (req, res) => {
//     let i = Number(req.params.id)
//     if (isNaN(i)) {
//         res.render('error404')
//     }
//     else if (!places[i]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }
//         // Save the new data into places[i]
//         places[i] = req.body
//         res.redirect(`/places/${i}`)
//     }
//   })  

// // Edit route
// router.get('/:id/edit', (req, res) => {
//   let i = Number(req.params.id)
//   if (isNaN(i)) {
//       res.render('error404')
//   }
//   else if (!places[i]) {
//       res.render('error404')
//   }
//   else { 
//       res.render('places/edit', { place: places[i], i})
//   }
// })

// // Delete Route
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// })

// // Post New Place Route
// router.post('/', (req, res) => {
//   // console.log(req.body);
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400';
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown';
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA';
//   }
//   places.push(req.body);
//   console.log(places)
//   res.redirect('/places'); // Redirect to the route that renders the updated list
// });

// module.exports = router