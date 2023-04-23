const router = require('express').Router();
let Answer = require('../models/answer.model.js');

router.route('/').get((req, res) => {
  Answer.find()
    .then((answers) => res.json(answers))
    .catch((err) => {
      console.log('err', err);
      res.status(400).json('Error: ' + err);
    });
});

router.route('/add').post((req, res) => {
  console.log('req', req.body);
  const text = req.body.text;
  const parentId = req.body.parentId;
  const createdAt = req.body.createdAt;
  const questionId = req.body.questionId;
  const newAnswer = new Answer({ text, parentId, createdAt });

  newAnswer
    .save()
    .then(() => res.json(newAnswer))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// find by property
router.route('/get-by-year/:year').get((req, res) => {
  console.log('get by year', req.params.year);
  Answer.find({ year: req.params.year })
    .then((answer) => {
      res.json(answer);
    })
    .catch((err) => {
      console.log('err', err);
      res.status(400).json('Error ' + err);
    });
});

// get one goal
router.route('/:id').get((req, res) => {
  console.log('find by id');
  Answer.findById(req.params.id)
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/vote').post(async (req, res) => {
  // Get the comment ID from the request body
  const commentId = req.body.commentId;

  // Find the comment with the given ID in the database
  const answer = await Answer.findById(commentId);

  // Increment the vote count on the comment
  answer.vote++;
  // Save the updated comment in the database
  answer
    .save()
    .then(() => res.json(answer))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
