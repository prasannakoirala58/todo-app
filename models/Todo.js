const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Todo', todoSchema);
