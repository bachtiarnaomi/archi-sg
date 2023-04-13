const router = require('express').Router();
let Quiz = require('../models/quiz.model.js');

router.route('/').get((req, res) => {
  Quiz.find()
    .then((quizes) => res.json(quizes))
    .catch((err) => {
      console.log('err', err);
      res.status(400).json('Error: ' + err);
    });
});

router.route('/add').post((req, res) => {
  const year = req.body.year;
  const mcq = req.body.mcq;
  const newQuiz = new Quiz({ year, mcq });

  newQuiz
    .save()
    .then(() => res.json(`Quiz for ${year} added`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// find by property
router.route('/get-by-year/:year').get((req, res) => {
  console.log('get by year', req.params.year);
  Quiz.find({ year: req.params.year })
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
  Quiz.findById(req.params.id)
    .then((goal) => res.json(goal))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
