const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Content of task must be provided"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
