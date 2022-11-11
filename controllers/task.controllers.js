import { makeResponse } from "../utils/index.js";
import { createTask } from "../services/tasks.services.js";

const createTaskController = async (req, res) => {
  try {
    const {
      project: { _id: id },
    } = req;
    const { content } = req.body;

    if (!content) {
      res.status(400).json(
        makeResponse({
          status: "ERROR",
          data: null,
          error: "",
          message: "content is not available in request",
        })
      );
      return;
    }

    const task = await createTask({ content, id });

    if (task?.error) {
      res.status(409).json(
        makeResponse({
          status: "ERROR",
          data: null,
          error: "",
          message: "task with identical content is already present",
        })
      );
      return;
    }

    res.status(201).json(
      makeResponse({
        status: "SUCCESS",
        data: { task: { ...task._doc } },
        error: null,
        message: "task added successfully",
      })
    );
  } catch (error) {
    res.status(500).json(
      makeResponse({
        status: "ERROR",
        data: null,
        error,
      })
    );
  }
};

export { createTaskController };
