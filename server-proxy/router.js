const router = require('express').Router();

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.redirect(`http://localhost:3002/api/calendar/:${id}`)
  })
  

module.exports = router;
  