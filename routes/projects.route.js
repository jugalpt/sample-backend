import express from "express";

import tasksRouter from "./tasks.route.js";
import { isProjectExists } from "../middlewares/index.js";
import {
  projectController,
  getProjectController,
  getAllProjectsController,
} from "../controllers/index.js";

const projectsRouter = express.Router();

projectsRouter
  // get all projects container
  .get("/", getAllProjectsController)
  // create a project
  .post("/", projectController)
  // get all details of the project
  .get("/:projectId", getProjectController);

projectsRouter.use("/:projectId/tasks", isProjectExists, tasksRouter);

export default projectsRouter;
