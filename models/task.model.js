import mongoose from "mongoose";
const { Schema, model } = mongoose;

const taskSchema = Schema(
  {
    content: Schema.Types.String,
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Task = model("Task", taskSchema);

export { Task };
