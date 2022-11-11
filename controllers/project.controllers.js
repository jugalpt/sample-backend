import { create, getProject } from "../services/index.js";
import { makeResponse } from "../utils/index.js";

const projectController = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await create({ name });

    if (data?.error) {
      res.status(409).json({
        success: false,
        error: data.error,
        message: "project with identical name already exists",
      });

      return;
    }

    res.status(201).json(
      makeResponse({
        status: "SUCCESS",
        data: { project: { ...data._doc } },
        error: null,
        message: "project created successufully",
      })
    );
  } catch (error) {
    res.status(500).json(
      makeResponse({
        status: "ERROR",
        data: null,
        error,
        message: "internal server error",
      })
    );
  }
};

const getProjectController = async (req, res) => {
  try {
    const { projectId: id } = req.params;
    const project = await getProject({ id });

    if (project?.error) {
      throw new Error(project?.error);
    }

    res.status(200).json(
      makeResponse({
        status: "SUCCESS",
        data: { project: { ...project._doc } },
        error: null,
        success: null,
      })
    );
  } catch (error) {
    res.status(500).json(
      makeResponse({
        status: "ERROR",
        data: null,
        error,
        message: "internal server error",
      })
    );
  }
};

export { projectController, getProjectController };
