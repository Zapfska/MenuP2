const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.route("/").post(cartController.insertBurgerIntoCart);
router.route("/:burgerId").delete(cartController.deleteBurgerFromCart);

module.exports = router;
