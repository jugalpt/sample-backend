import { Task, Project } from "../models/index.js";

const createTask = async ({ content, id }) => {
  const isTaskAlreadyExists = await Task.findOne({ content });

  if (isTaskAlreadyExists) {
    return { error: "task with the same content already exists" };
  }

  const newTask = await Task.create({ content, project: id });

  const newTaskId = newTask._doc._id;

  if (!newTaskId) {
    return { error: "error occurred while creating task" };
  }

  const isTasksUpdated = await Project.findOneAndUpdate(
    id,
    {
      $addToSet: { tasks: newTaskId },
    },
    { new: true }
  );

  if (!isTasksUpdated?._doc?._id) {
    return { error: "error occured while adding task to the project" };
  }

  return newTask;
};

export { createTask };
