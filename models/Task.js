const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Task", TaskSchema); // Task => tasks collection name oluyor 
