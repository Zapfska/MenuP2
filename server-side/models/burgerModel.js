const mongoose = require("mongoose");

const burgerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the burger name"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the burger price"],
  },
  image: {
    type: String,
    required: [true, "Please provide the burger image"],
  },
  alt: {
    type: String,
    required: [true, "Please provide the burger alt"],
  },
});

const Burger = mongoose.model("Burger", burgerSchema);

module.exports = Burger;
