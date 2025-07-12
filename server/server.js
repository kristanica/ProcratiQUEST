const express = require("express");
const cors = require("cors");
const authRoutes = require("./Routes/authRoutes");
const userRoutes = require("./Routes/userRoutes");
const monsterRoutes = require("./Routes/monsterRoutes");

const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/monster", monsterRoutes);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
