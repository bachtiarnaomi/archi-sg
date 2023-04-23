import axios from 'axios';

const questionId = '2017.2.01';
export const getAnswers = axios.get(
  `http://localhost:3003/answer/questionId/${questionId}`
);

export function addAnswer(goal) {
  axios.post('http://localhost:3003/answer/add', goal);
}

// router.route('/add').post((req, res) => {
//   const year = req.body.year;
//   const mcq = req.body.mcq;
//   const newQuiz = new Answer({ year, mcq });

//   newQuiz
//     .save()
//     .then(() => res.json(`Quiz for ${year} added`))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });
