import { app } from "./app";
require("dotenv").config();




app.listen(process.env.port, () => {
  console.log(`Server is running on http://localhost:${process.env.port}`);
});
