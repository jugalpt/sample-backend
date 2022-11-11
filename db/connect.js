import mongoose from "mongoose";

async function connect() {
  mongoose
    .connect(process.env.DB_URI)
    .then((_) => {
      console.log("Successfully connected with database");
    })
    .catch((err) => {
      console.log("error occurred while connecting to the database", err);
      process.exit(1);
    });
}

export { connect };