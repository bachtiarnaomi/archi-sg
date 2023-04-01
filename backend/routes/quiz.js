const router = require('express').Router();
let Quiz = require('../models/quiz.model.js');

router.route('/').get((req, res) => {
  Quiz.find()
    .then((quizes) => res.json(quizes))
    .catch((err) => res.status(400).json('Error: ' + err));
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

router.route('/:year/:value').get((req, res) => {
  Quiz.find({ [req.params.key]: [req.params.value] })
    .then((quiz) => res.json(quiz))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
