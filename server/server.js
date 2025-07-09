const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

const users = [];
app.listen(8080, () => {
  console.log("Server started on port 8080");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((e) => e.id === id);

  if (!user) {
    return res.status(400).send({ message: "User not found!" });
  }

  res.json(user);
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(409).send({ message: "You do not have a name!" });
  }
  const existingUser = users.some((val) => val.username === username);

  if (existingUser) {
    return res.send({ message: "User already exist" });
  }

  users.push({ id, username, password });
  res.send({
    message: "sucessful registration",
    user: username,
  });
});
