import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectSchema = Schema(
  {
    name: Schema.Types.String,
    tasks: {
      type: Schema.Types.ObjectId,
      ref: "Task",
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

const Project = model("Project", projectSchema);

export { Project };
