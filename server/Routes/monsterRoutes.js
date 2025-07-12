const express = require("express");
const fs = require("fs/promises");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const temp = await fs.readFile("./temp/monster.json", "utf-8");
    const monsterData = JSON.parse(temp);
    if (monsterData.length === 0) {
      return res.status(404).send("Empty data set");
    }
    res.status(200).send(monsterData);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

router.post("/", async (req, res) => {
  const {
    id,
    name,
    healthPoints,
    description,
    level,
    reward,
    attackPower,
    isBoss,
  } = req.body;

  try {
    let temp = [];
    const tempRead = await fs.readFile("./temp/monster.json", "utf-8");
    const monsterData = JSON.parse(tempRead);
    if (monsterData.length === 0) {
      return res.status(404).send("Data set is empty");
    }

    temp = monsterData;
    temp.push({
      id,
      name,
      healthPoints,
      description,
      level,
      reward,
      attackPower,
      isBoss,
    });

    await fs.writeFile("./temp/monster.json", JSON.stringify(temp));
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
  res.status(200).json("New Monster added: " + name);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const temp = await fs.readFile("./temp/monster.json", "utf-8");
    const specificMonsterData = JSON.parse(temp);
    if (specificMonsterData.length === 0) {
      return res.status(404).send("Empty data set");
    }
    const resMonster = specificMonsterData.find((data) => data.id === id);

    if (!resMonster) {
      return res.status(404).send("There are no monster with the specified ID");
    }

    res.status(200).send(resMonster);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

module.exports = router;
