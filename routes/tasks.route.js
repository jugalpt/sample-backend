const express = require("express");
const tasksRouter = express.Router();

tasksRouter
  .get("/", (req, res) => {
    req.send('task in taskRouter');
  })
  .get("/:taskId", (req, res) => {
    console.log(req.params);
    res.send('task with task id');
  });

module.exports = { tasksRouter };
