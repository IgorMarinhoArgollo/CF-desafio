const { Order } = require('../database/models');

const getAllOrders = async () => {
  const result = await Order.findAll({
    include: [{ all: true }],
  });
  return result;
};

module.exports = { getAllOrders };
