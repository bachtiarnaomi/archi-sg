const router = require('express').Router();
let Quiz2 = require('../models/quiz2.model.js');

router.route('/').get((req, res) => {
  Quiz2.find()
    .then((quizes) => res.json(quizes))
    .catch((err) => {
      console.log('err', err);
      res.status(400).json('Error: ' + err);
    });
});

router.route('/add').post((req, res) => {
  const year = req.body.year;
  const mcq = req.body.mcq;
  const essay = req.body.essay;
  const newQuiz2 = new Quiz2({ year, mcq, essay });

  newQuiz2
    .save()
    .then(() => res.json(`Quiz2 for ${year} added`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// find by property
router.route('/get-by-year/:year').get((req, res) => {
  console.log('get by year', req.params.year);
  Quiz2.find({ year: req.params.year })
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((err) => {
      console.log('err', err);
      res.status(400).json('Error ' + err);
    });
});

// get one goal
router.route('/:id').get((req, res) => {
  console.log('find by id');
  Quiz2.findById(req.params.id)
    .then((goal) => res.json(goal))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
