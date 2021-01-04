const Cart = require("../models/cartModel");

exports.insertBurgerIntoCart = async (req, res, next) => {
  try {
    console.log(req.body);
    const cart = await Cart.create(req.body);
    res.status(201).json({
      status: "successs",
      data: cart,
    });
  } catch {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.deleteBurgerFromCart = async (req, res, next) => {
  await Cart.findOneAndDelete({ burger: req.params.burgerId });

  res.status(204).json({
    status: "successs",
    data: null,
  });
};
