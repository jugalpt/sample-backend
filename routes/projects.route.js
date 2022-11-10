const express = require("express");
const projectsRouter = express.Router();
const { tasksRouter } = require("../routes/tasks.route");

projectsRouter
  .get("/", (req, res) => {
    res.send("list me all the projects");
  })
  .get("/:projectId", (req, res) => {
    res.send(req.params);
  })

projectsRouter.use("/:projectId/tasks", tasksRouter);

// export default projectsRouter;
module.exports = { projectsRouter };
