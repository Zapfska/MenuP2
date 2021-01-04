const express = require("express");
const burgerController = require("../controllers/burgerController");

const router = express.Router();

router
  .route("/")
  .get(burgerController.getBurger)
  .post(burgerController.insertBurger);

module.exports = router;
