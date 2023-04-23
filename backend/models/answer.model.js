const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  username: { type: String, default: 'Anonymous User' },
  userId: { type: String, default: null },
  parentId: { type: String },
  createdAt: { type: String },
  vote: { type: Number, default: 0 },
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
