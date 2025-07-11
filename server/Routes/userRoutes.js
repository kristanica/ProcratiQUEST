const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/users/:id", (req, res) => {
  fs.readFile("./temp/userData");
});
