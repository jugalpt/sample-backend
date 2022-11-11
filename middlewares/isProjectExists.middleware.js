import { Project } from "../models/index.js";
import { makeResponse } from "../utils/index.js";

async function isProjectExists(req, res, next) {
  try {
    const { projectId: id } = req.params;
    const project = await Project.findById(id).exec();

    if (!project?._id) {
      throw new Error("project is not available");
    }

    req.project = { ...project._doc };

    next();
  } catch (error) {
    res.json(
      makeResponse({
        status: "ERROR",
        data: null,
        error,
        message: "project with given id doesn't exists",
      })
    );
  }
}

export { isProjectExists };
