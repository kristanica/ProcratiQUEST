const express = require("express");
const fs = require("fs/promises");

const router = express.Router();

//get all userdata
router.get("/", async (req, res) => {
  try {
    const temp = await fs.readFile("./temp/userData.json", "utf8");
    const allUserData = JSON.parse(temp);
    if (allUserData.length === 0) {
      return res.status(404).send("Data set is empty");
    }
    res.status(200).send(allUserData);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

//get specific user data
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const temp = await fs.readFile("./temp/userData.json", "utf8");
    const userData = JSON.parse(temp);

    const userSpecificData = userData.find((data) => data.id === Number(id));

    if (!userSpecificData) {
      return res.status(404).send("User not found");
    }

    res.status(200).send(userSpecificData);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

module.exports = router;
