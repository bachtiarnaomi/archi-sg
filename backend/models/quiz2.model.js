const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quiz2Schema = new Schema({
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
  essay: { type: Array, required: true },
});

const Quiz2 = mongoose.model('Quiz2', quiz2Schema);

module.exports = Quiz2;
