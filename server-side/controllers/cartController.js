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
    status: "success",
    data: null,
  });
};

exports.getCartByBurgerId = async (req, res, next) => {
  const cart = await Cart.findOne({ burger: req.params.burgerId }).populate(
    "burger"
  );

  res.status(200).json({
    status: "success",
    data: cart,
  });
};
