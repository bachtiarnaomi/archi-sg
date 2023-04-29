const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  telegram_username: { type: String },
  first_name: { type: String },
  username: { type: String, default: 'Anonymous User' },
  userId: { type: String, default: null },
  auth_date: { type: String },
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
