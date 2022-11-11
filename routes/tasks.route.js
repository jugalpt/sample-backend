import express from "express";

import { createTaskController } from "../controllers/index.js";

const tasksRouter = express.Router();

tasksRouter
  .get("/", (req, res) => {
    req.send("task in taskRouter");
  })
  // create a task
  .post("/", createTaskController)
  .get("/:taskId", (req, res) => {
    console.log(req.params);
    res.send("task with task id");
  });

export default tasksRouter;
