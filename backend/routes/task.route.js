const express = require("express");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller.js");
const router = express.Router();

// Find all task
router.get("/", getTasks);

// Find 1 task by id
router.get("/:id", getTask);

// Create a new task
router.post("/", createTask);

// Update a task
router.put("/:id", updateTask);

// Delete a task
router.delete("/:id", deleteTask);

module.exports = router;
