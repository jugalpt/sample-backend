import express from "express";
import * as dotenv from "dotenv";

import projectsRouter from "./routes/projects.route.js";
import { connect } from "./db/connect.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

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
