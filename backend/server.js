const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const _dirname = path.dirname('');
const buildPath = path.join(_dirname, '../build');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { ssl: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongoose database connection established');
});

const quizRouter = require('./routes/quiz');

app.use('/quiz', quizRouter);

app.use(express.static(buildPath));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
