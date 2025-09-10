const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const taskRoute = require("./routes/task.route.js");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/tasks", taskRoute);

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Visit: http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection fail!");
  });

module.exports = app;
