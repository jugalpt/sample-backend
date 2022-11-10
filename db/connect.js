const mongoose = require("mongoose");

async function connect() {
  console.log(process.env.DB_URI);
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

module.exports = { connect };
