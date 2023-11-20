import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();


app.listen(process.env.port, () => {
  console.log(`Server is running on http://localhost:${process.env.port}`);
  connectDB()
});
