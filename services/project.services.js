import { Project, Task } from "../models/index.js";

const create = async ({ name }) => {
  const isNameAlredyExists = await Project.findOne({ name });

  if (isNameAlredyExists) {
    return { error: "name is alredy exists" };
  }

  const project = await Project.create({ name });

  return { ...project };
};

const getProject = async ({ id }) => {
  const project = await Project.findOne({ id }).populate({
    path: "tasks",
    select: "-__v",
  });

  if (!project?._doc?._id) {
    return { error: "error while getting project details" };
  }

  return project;
};

const getAllProjects = async () => {
  const projects = await Project.find({}).populate({
    path: "tasks",
    model: Task,
  });

  console.log({ projects });

  return projects;
};

export { create, getProject, getAllProjects };
