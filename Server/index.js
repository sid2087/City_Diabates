const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/index.js");
app.use(cors());
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRoute = require("./routes/user.routes.js");
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
