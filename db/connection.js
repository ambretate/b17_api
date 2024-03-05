import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/hogwarts_api";
mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("connected", () => console.log("Connected to database"));
mongoose.connection.on("disconnected", () =>
  console.log(chalk.bold("Disconnected from database"))
);
mongoose.connection.on("error", (error) =>
  console.error("Database error", error)
);

export default mongoose.connection;