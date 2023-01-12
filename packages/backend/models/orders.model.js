const { Order } = require('../database/models');

const getAllOrders = async () => {
  const result = await Order.findAll();
  return result;
};

module.exports = { getAllOrders };