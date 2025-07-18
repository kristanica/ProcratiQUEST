const express = require("express");
const fs = require("fs");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const router = express.Router();

router.post("/register", (req, res) => {
  const { id, username, password } = req.body;

  const { salt, hashPassword } = createHash(password);
  if (!username || !password || !id) {
    return res.status(400).send({ message: "You do not have a name!" });
  }

  fs.readFile("./temp/user.json", "utf8", (err, rawUserCredentials) => {
    if (err) {
      console.log(err);
      return;
    }
    let user = [];
    try {
      user = JSON.parse(rawUserCredentials);
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

    const newRegister = { id, username, password: hashPassword, salt };
    user.push(newRegister);
    fs.readFile("./temp/userData.json", "utf8", (err, rawUserData) => {
      if (err) {
        console.log(err);
        return;
      }
      let newUserDataRegister = [];
      try {
        newUserDataRegister = JSON.parse(rawUserData);
      } catch (error) {
        console.log(error);
      }

      const newUserData = {
        id: newRegister.id,
        bio: "sample info",
        displayName: newRegister.username,
      };
      newUserDataRegister.push(newUserData);

      fs.writeFile("./temp/user.json", JSON.stringify(user), "utf8", (err) => {
        if (err) {
          console.log(err);
          return;
        }

        fs.writeFile(
          "./temp/userData.json",
          JSON.stringify(newUserDataRegister),
          (err) => {
            if (err) {
              console.log(err);
              return;
            }
          }
        );
      });
    });
    res.send({
      message: "sucessful registration",
      user: username,
    });
  });
});

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
    const existingUser = user.find((data) => data.username === username);
    if (!existingUser) {
      return res.status(404).send({ message: "User not found!" });
    }
    const isHash = checkHash(
      password,
      existingUser.salt,
      existingUser.password
    );

    if (!isHash) {
      return res.status(404).json({ message: "password does not match" });
    }

    fs.readFile("./temp/userData.json", "utf8", (err, userData) => {
      if (err) {
        console.log(err);
        return;
      }
      let temp = [];
      try {
        temp = JSON.parse(userData);
      } catch (error) {
        console.log(error);
      }

      const existingUserData = temp.find((data) => data.id === existingUser.id);

      res.send({
        message: "sucesful login!",
        user: {
          ...existingUserData,
        },
      });
    });
  });
});

function createHash(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashPassword = crypto.scryptSync(password, salt, 64).toString("hex");

  return { salt, hashPassword };
}

function checkHash(password, salt, existingPassword) {
  const hashPassword = crypto.scryptSync(password, salt, 64).toString("hex");
  return hashPassword === existingPassword;
}
module.exports = router;
