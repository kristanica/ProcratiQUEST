const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post("/register", (req, res) => {
  const { id, username, password } = req.body;

  if (!username || !password || !id) {
    return res.status(400).send({ message: "You do not have a name!" });
  }

  fs.readFile("./temp/user.json", "utf8", (err, data) => {
    if (err) {
      console.log(er);
      return;
    }
    let user = [];
    try {
      user = JSON.parse(data);
    } catch (err) {
      console.log(err);
    }

    const existingUser = user.some(
      (val) => val.username.toLowerCase() === username.toLowerCase()
    );

    if (existingUser) {
      return res.send({ message: "User already exist" });
    }
    //newUser
    const newUserData = { id, username, password };
    user.push(newUserData);

    fs.writeFile("./temp/user.json", JSON.stringify(user), "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File written sucesfully");
      res.send({
        message: "sucessful registration",
        user: username,
      });
    });
  });
});

const users = [{ id: 1, username: "lain", password: "lain" }];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  fs.readFile("./temp/user.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let user = [];

    try {
      user = JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
    const existingUser = user.some((data) => data.username === username);

    if (!existingUser) {
      return res.status(404).send({ message: "User not found!" });
    }

    res.send({
      message: "Login!",
    });
  });
});

module.exports = router;
