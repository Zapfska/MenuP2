const Burger = require("../models/burgerModel");

exports.getBurger = async (req, res, next) => {
  const burgers = await Burger.find();

  res.status(200).json({
    status: "success",
    data: {
      data: burgers,
    },
  });
};

exports.insertBurger = async (req, res, next) => {
  const burger = await Burger.create(req.body);
  console.log(burger);
  res.status(201).json({
    status: "successs",
    data: burger,
  });
};
