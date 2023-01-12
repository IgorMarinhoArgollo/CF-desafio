const ordersService = require('../services/orders.service');

const getAllOrders = async (_req, res, next) => {
  try {
    const products = await ordersService.getAllOrders();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllOrders };