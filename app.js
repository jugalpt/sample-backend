import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import projectsRouter from "./routes/projects.route.js";
import { connect } from "./db/connect.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
