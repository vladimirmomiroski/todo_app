const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('todos', TodoSchema);
