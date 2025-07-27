const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const blogsRoute = require("./routes/blogs");
const usersRoute = require("./routes/users");

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
  res.send("App server is LIVE 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server & App's APIs running on port ${PORT}`);
});
