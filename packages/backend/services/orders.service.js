const ordersModel = require('../models/orders.model');

const getAllOrders = async () => {
  const result = await ordersModel.getAllOrders();
  return result;
};

module.exports = { getAllOrders };