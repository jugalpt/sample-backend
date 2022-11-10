const express = require("express");
const { projectsRouter } = require("./routes/projects.route");
const { connect } = require("./db/connect");

const app = express();
const port = 3000;

// schema
// project: {
//     id: ID,
//     name: string
//     tasks: Tasks[]
// }
// task: {
//     id: ID,
//     content: string,
//     project: Project
// }

// routes
// /projects - all projects
// /projects/1 - project with id 1
// /project/1/tasks - all tasks in project 1

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/projects", projectsRouter);

app.get("/projects/:projectId/tasks", (req, res) => {
  res.send(req.params);
});

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
