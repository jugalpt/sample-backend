import express from "express";

import tasksRouter from "./tasks.route.js";
import { isProjectExists } from "../middlewares/index.js";
import {
  projectController,
  getProjectController,
} from "../controllers/index.js";

const projectsRouter = express.Router();

projectsRouter
  .get("/", (req, res) => {
    res.send("list me all the projects");
  })
  // create a project
  .post("/", projectController)
  // get all details of the project
  .get("/:projectId", getProjectController);

projectsRouter.use("/:projectId/tasks", isProjectExists, tasksRouter);

export default projectsRouter;
