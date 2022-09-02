const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    console.log("sauces.js");
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
