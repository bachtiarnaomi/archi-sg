const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quizSchema = new Schema({
  year: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: Number.isInteger,
      message: 'Value is not an integer',
    },
  },
  mcq: { type: Array, required: true },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
