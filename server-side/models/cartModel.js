const mongoose = require("mongoose");
// const Burger = require("./burgerModel");

const cartSchema = mongoose.Schema({
  burger: {
    type: mongoose.Schema.ObjectId,
    ref: "Burger",
    required: [true, "Please provide the burger"],
    unique: true,
  },
  qte: {
    type: Number,
    required: [true, "Please provide the burger Quantity"],
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
